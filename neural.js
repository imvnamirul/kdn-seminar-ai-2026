/* KDN 2026 — luminous neural sculpture.
   Canvas 2D, no libraries. Rotating 3D neurons and flowing impulses.
   Automatically pauses when offscreen and respects reduced motion. */
(() => {
  'use strict';
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d', {alpha:true});
  if (!ctx) return;
  const container = canvas.parentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let visible=true, frame=0, width=600, height=600, size=600, dpr=1, lastFrame=0;
  let startTime=performance.now(), elapsedAtPause=0;
  const PI2=Math.PI*2;
  const green=[218,255,119], aqua=[108,255,212];
  const rgba=(c,a) => 'rgba('+c[0]+','+c[1]+','+c[2]+','+Math.max(0,Math.min(1,a)).toFixed(3)+')';

  const N=window.innerWidth<=760?166:252;
  const vertices=[], golden=Math.PI*(3-Math.sqrt(5));
  for(let i=0;i<N;i++){
    const y=1-2*(i+.5)/N, r=Math.sqrt(Math.max(0,1-y*y));
    const theta=golden*i, nudge=1+.042*Math.sin(theta*3.2)*Math.cos(i*.13);
    vertices.push({x:Math.cos(theta)*r*nudge,y:y*nudge,z:Math.sin(theta)*r*nudge,i});
  }
  const edges=[], edgeIndex=new Set();
  vertices.forEach((v,i)=>{
    const near=[];
    for(let j=0;j<N;j++) if(j!==i){
      const p=vertices[j], d=(v.x-p.x)**2+(v.y-p.y)**2+(v.z-p.z)**2;
      if(d<.33) near.push({j,d});
    }
    near.sort((a,b)=>a.d-b.d);
    near.slice(0,3).forEach(({j})=>{
      const key=Math.min(i,j)+'-'+Math.max(i,j);
      if(!edgeIndex.has(key)){edgeIndex.add(key);edges.push([i,j]);}
    });
  });
  const stars=Array.from({length:70},(_,i)=>({
    x:((Math.sin(i*127.1)*43758.5453)%1+1)%1,
    y:((Math.sin(i*86.34+3.1)*25983.121)%1+1)%1,
    s:i%5===0?1.55:.8
  }));
  function resize(){
    const rect=canvas.getBoundingClientRect();
    width=Math.max(1,Math.round(rect.width));height=Math.max(1,Math.round(rect.height));
    size=Math.min(width,height);dpr=Math.min(window.devicePixelRatio||1,1.7);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    draw(reduced.matches?.8:(performance.now()-startTime)/1000);
  }
  const rotate=(v,time,k=1)=>{
    const ay=time*.53*k+.25,ax=time*.23*k+.21,az=Math.sin(time*.21)*.10;
    const cy=Math.cos(ay),sy=Math.sin(ay),cx=Math.cos(ax),sx=Math.sin(ax);
    const x1=v.x*cy+v.z*sy,z1=-v.x*sy+v.z*cy;
    const y2=v.y*cx-z1*sx,z2=v.y*sx+z1*cx,cz=Math.cos(az),sz=Math.sin(az);
    return {x:x1*cz-y2*sz,y:x1*sz+y2*cz,z:z2};
  };
  const project=(v,radius)=>{
    const perspective=3.65/(3.65-v.z*.62);
    return{x:width/2+v.x*radius*perspective,y:height/2+v.y*radius*perspective,z:v.z,scale:perspective};
  };
  function bloom(x,y,r,col,alpha=1){
    const g=ctx.createRadialGradient(x,y,0,x,y,r);
    g.addColorStop(0,rgba(col,.46*alpha));
    g.addColorStop(.22,rgba(col,.12*alpha));
    g.addColorStop(1,rgba(col,0));
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,PI2);ctx.fill();
  }
  function line(a,b,alpha,color,widthLine=.8){
    ctx.strokeStyle=rgba(color,alpha);ctx.lineWidth=widthLine;
    ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
  }
  function fibre(t,band,seconds){
    const turn=t*PI2;
    const lat=.33*Math.sin(turn*2+band*1.71+seconds*.28)+.12*Math.cos(turn*4+band*2);
    const orbitAngle=turn+band*.53;
    const f={x:Math.cos(orbitAngle)*Math.cos(lat),y:Math.sin(lat),z:Math.sin(orbitAngle)*Math.cos(lat)};
    const ca=Math.cos(band*.87),sa=Math.sin(band*.87);
    return project(rotate({x:f.x*ca-f.y*sa,y:f.x*sa+f.y*ca,z:f.z},seconds,band%2?-.67:1),size*.31);
  }
  function draw(seconds){
    ctx.clearRect(0,0,width,height);
    const cx=width/2,cy=height/2,radius=size*.318;
    bloom(cx,cy,size*.40,aqua,.33);bloom(cx,cy,size*.32,green,.30);
    for(let i=0;i<stars.length;i++){
      const s=stars[i],x=s.x*width+Math.sin(seconds*.25+i)*4,
            y=s.y*height+Math.cos(seconds*.26+i)*5;
      const dist=Math.hypot(x-cx,y-cy);
      if(dist<size*.18||dist>size*.46)continue;
      const alpha=.08+.3*(.5+.5*Math.sin(seconds*1.7+i));
      ctx.fillStyle=rgba(i%4===0?aqua:green,alpha);
      ctx.beginPath();ctx.arc(x,y,s.s,0,PI2);ctx.fill();
    }
    const g=ctx.createRadialGradient(cx,cy,size*.02,cx,cy,size*.24);
    g.addColorStop(0,'rgba(185,255,186,.12)');
    g.addColorStop(.23,'rgba(108,255,212,.055)');
    g.addColorStop(.58,'rgba(159,247,132,.025)');
    g.addColorStop(1,'rgba(23,26,24,0)');
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx,cy,size*.25,0,PI2);ctx.fill();
    const points=vertices.map(v=>project(rotate(v,seconds),radius));
    ctx.lineCap='round';ctx.globalCompositeOperation='screen';
    edges.forEach(([i,j],idx)=>{
      const a=points[i],b=points[j],depth=(a.z+b.z)*.5;
      const intensity=.05+Math.max(0,depth+.35)*.11;
      const flutter=1+.24*Math.sin(seconds*2+idx*.31);
      line(a,b,intensity*flutter,idx%7===0?aqua:green,depth>.3?1.05:.67);
    });
    for(let k=0;k<5;k++){
      const color=k%2?aqua:green;
      for(let j=1;j<=125;j++){
        const a=fibre((j-1)/125,k,seconds),b=fibre(j/125,k,seconds);
        const energy=Math.max(0,((a.z+b.z)*.5+.65)/1.65);
        const alpha=(.042+.29*energy)*(k===1?1.35:1);
        line(a,b,alpha,color,energy>.7?1.75:1.15);
      }
    }
    for(let i=0;i<19;i++){
      const k=i%5,t=(seconds*(.092+(i%3)*.02)+i*.137)%1;
      const p=fibre(t,k,seconds),color=i%3===0?aqua:green;
      const depthAlpha=Math.max(.24,(p.z+1)/2),head=1.7+2.3*depthAlpha;
      for(let a=6;a>=1;a--){
        const q=fibre((t-a*.0026+1)%1,k,seconds);
        line(q,p,.035+(7-a)*.014,color,.6+(6-a)*.16);
      }
      bloom(p.x,p.y,14+7*depthAlpha,color,.42*depthAlpha);
      ctx.fillStyle=rgba(color,.7*depthAlpha);
      ctx.beginPath();ctx.arc(p.x,p.y,head,0,PI2);ctx.fill();
    }
    const sorted=points.map((p,i)=>({p,i})).sort((a,b)=>a.p.z-b.p.z);
    for(const {p,i} of sorted){
      const bright=Math.max(.15,(p.z+1)/2);
      const firing=Math.pow(Math.max(0,Math.sin(seconds*2.8+i*1.93)),14);
      const col=i%9===0?aqua:green,sz=(.85+1.32*bright+firing*1.25)*p.scale;
      if(firing>.4||(i%31===0&&bright>.6))bloom(p.x,p.y,9+firing*9,col,bright*.68);
      ctx.fillStyle=rgba(col,.19+.77*bright);
      ctx.beginPath();ctx.arc(p.x,p.y,sz,0,PI2);ctx.fill();
    }
    ctx.globalCompositeOperation='source-over';
    const beat=.5+.5*Math.sin(seconds*3.3);
    bloom(cx,cy,size*(.11+.018*beat),green,.26+.18*beat);
    bloom(cx+Math.cos(seconds*.8)*12,cy+Math.sin(seconds*.8)*10,size*.068,aqua,.21);
  }
  function animate(now){
    if(reduced.matches||!visible||document.hidden){frame=0;return;}
    if(now-lastFrame>30){draw((now-startTime+elapsedAtPause)/1000);lastFrame=now;}
    frame=requestAnimationFrame(animate);
  }
  function start(){
    if(frame||reduced.matches||!visible||document.hidden)return;
    startTime=performance.now();frame=requestAnimationFrame(animate);
  }
  function stop(){
    if(!frame)return;
    elapsedAtPause+=performance.now()-startTime;
    cancelAnimationFrame(frame);frame=0;
  }
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(entries=>{
    visible=entries[0]?.isIntersecting??true;
    if(visible)start();else stop();
  },{threshold:.01}).observe(container);
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  reduced.addEventListener?.('change',()=>{if(reduced.matches){stop();draw(.8);}else start();});
  resize();start();
})();
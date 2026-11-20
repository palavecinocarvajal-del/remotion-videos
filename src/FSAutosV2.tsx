import React from 'react';
import {
  AbsoluteFill, Img, OffthreadVideo, Sequence,
  interpolate, staticFile, useCurrentFrame
} from 'remotion';

/**
 * FS AUTOS — Reel de captación, 15 s, vertical.
 * Media requerido: public/fsautos/34345.mp4 y logo-fs-autos.png.
 * Audio opcional, se añade al montaje final desde fuera de Remotion.
 *
 * Basado en el material original entregado por el usuario.
 */
const CYAN = '#0dcbed';
const WHITE = '#f9fcff';
const fps = 24;
const scenes = [
  {start:0, end:62, source:4, rate:.70, kind:'intro'},
  {start:62, end:136, source:76, rate:.80, kind:'datos'},
  {start:136, end:209, source:139, rate:.65, kind:'oferta'},
  {start:209, end:263, source:7, rate:.85, kind:'directo'},
  {start:263, end:360, source:206, rate:.08, kind:'final'},
] as const;

function stagger(frame:number, at:number, duration=12) {
  return interpolate(frame,[at,at+duration],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
}
const TextLine:React.FC<{text:string;frame:number;delay:number;size:number;cyan?:boolean}> =
 ({text,frame,delay,size,cyan})=>{
   const p=stagger(frame,delay);
   return <div style={{
     color:cyan?CYAN:WHITE,opacity:p,
     transform:'translateX('+((1-p)*(cyan?105:-105))+'px) scale('+(1.08-.08*p)+')',
     fontFamily:'Arial,Helvetica,sans-serif',fontWeight:900,fontSize:size,
     lineHeight:1.09,letterSpacing:-2,textAlign:'center',
     textShadow:'0 4px 20px rgba(0,0,0,.34)'
   }}>{text}</div>;
 };

const Header:React.FC=()=> <div style={{position:'absolute',top:110,left:58,right:58}}>
  <div style={{fontSize:30,fontFamily:'Arial',fontWeight:900,color:WHITE}}>
    <span style={{color:CYAN}}>━</span> FS AUTOS
  </div>
  <div style={{fontSize:18,marginTop:10,color:'#c9e0e6',fontFamily:'Arial'}}>
    SANTIAGO  |  COMPRA DIRECTA
  </div>
  <div style={{height:1,background:'rgba(160,216,227,.23)',marginTop:20}}/>
</div>;

const Centered:React.FC<{kind:string;frame:number}>=({kind,frame})=>{
 const p=stagger(frame,4);
 const lines = kind==='intro'?[
   {text:'¿VAS A',size:76},{text:'VENDER',size:106,cyan:true},{text:'TU AUTO?',size:91}
 ]:kind==='datos'?[
   {text:'ASÍ DE',size:90},{text:'SIMPLE',size:112,cyan:true}
 ]:kind==='oferta'?[
   {text:'LO',size:92},{text:'EVALUAMOS',size:83,cyan:true}
 ]:[
   {text:'TRATO',size:110},{text:'DIRECTO',size:100,cyan:true}
 ];
 const pill = kind==='intro'?'ESTO TE INTERESA':
              kind==='datos'?'MARCA · AÑO · FOTOS':
              kind==='oferta'?'RECIBE NUESTRA OFERTA':
              'SIN DAR TANTAS VUELTAS';
 return <>
   <div style={{position:'absolute',top:275,left:38,right:38,display:'flex',
     flexDirection:'column',gap:5,alignItems:'center'}}>
     {lines.map((l,i)=><TextLine key={l.text} text={l.text} size={l.size} cyan={Boolean(l.cyan)} frame={frame} delay={5+i*9}/>)}
   </div>
   <div style={{position:'absolute',top:kind==='datos'?955:947,left:66,right:66,
      borderRadius:19,background:'#087e9bcf',border:'1px solid #42c3de',
      padding:'20px 13px',textAlign:'center',
      color:WHITE,fontFamily:'Arial',fontWeight:800,fontSize:30,
      opacity:stagger(frame,24),
      transform:'translateY('+(25*(1-stagger(frame,24)))+'px)'
   }}>{pill}</div>
 </>;
};

const Closing:React.FC<{frame:number}>=({frame})=>{
 const p=stagger(frame,7,15);
 const button=stagger(frame,24,15);
 return <>
   <div style={{position:'absolute',top:230,left:95,right:95,opacity:p,
      transform:'scale('+(1.12-.12*p)+')'}}>
     <Img src={staticFile('fsautos/logo-fs-autos.png')}
       style={{width:'100%',height:200,objectFit:'contain',
        filter:'drop-shadow(0 4px 20px rgba(0,0,0,.18))'}}/>
   </div>
   <div style={{position:'absolute',top:780,left:25,right:25}}>
    <TextLine text="COMPRAMOS" frame={frame} delay={12} size={83}/>
    <TextLine text="TU AUTO" frame={frame} delay={21} size={107} cyan/>
   </div>
   <div style={{position:'absolute',bottom:157,left:50,right:50,height:94,
     display:'flex',alignItems:'center',justifyContent:'center',borderRadius:22,
     background:CYAN,opacity:button,transform:'translateY('+(60*(1-button))+'px)',
     color:'#041724',fontFamily:'Arial',fontSize:37,fontWeight:900}}>
      <span style={{fontSize:32,marginRight:14}}>✆</span>+56 9 7715 2253
   </div>
   <div style={{position:'absolute',bottom:107,left:0,right:0,textAlign:'center',
     fontFamily:'Arial',fontSize:26,fontWeight:800,color:WHITE,opacity:button}}>
      ESCRÍBENOS POR WHATSAPP
   </div>
 </>;
};

const Scene:React.FC<{kind:string;source:number;rate:number;duration:number}>=
 ({kind,source,rate,duration})=>{
  const f=useCurrentFrame();
  const last=kind==='final';
  const fade=interpolate(f,[0,7,duration-7,duration],[0,1,1,0],
    {extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <AbsoluteFill style={{overflow:'hidden',background:'#03111f',opacity:fade}}>
   <OffthreadVideo src={staticFile('fsautos/34345.mp4')} startFrom={source}
     playbackRate={rate} muted style={{
       width:'100%',height:'100%',objectFit:'cover',
       transform:'scale('+(1+f*.00037)+')'}}/>
   <AbsoluteFill style={{background:last?
     'linear-gradient(180deg,#04101b 0%,#04101b 33%,rgba(4,16,27,.93) 43%,rgba(4,16,27,.08) 72%,rgba(4,16,27,.9) 99%)':
     'linear-gradient(180deg,#04101b 0%,#04101b 33%,rgba(4,16,27,.94) 42%,rgba(4,16,27,.06) 63%,rgba(4,16,27,.8) 100%)'}}/>
   <Header/>
   {last?<Closing frame={f}/>:<Centered kind={kind} frame={f}/>}
   <div style={{position:'absolute',bottom:50,left:70,right:70,display:'flex',gap:12}}>
    {scenes.map((s,i)=><div key={s.kind} style={{height:5,borderRadius:5,flex:1,
       background:s.kind===kind?CYAN:'rgba(161,198,209,.3)'}}/>)}
   </div>
  </AbsoluteFill>;
};

export const FSAutosV2:React.FC=()=> <AbsoluteFill style={{background:'#04101b'}}>
 {scenes.map(s=><Sequence key={s.kind} from={s.start} durationInFrames={s.end-s.start}>
    <Scene kind={s.kind} source={s.source} rate={s.rate} duration={s.end-s.start}/>
 </Sequence>)}
</AbsoluteFill>;

import React from 'react';
import {AbsoluteFill, Img, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';

const BLUE='#09cbef', WHITE='#f6faff';
const clips=[
 {from:0,duration:126,file:'bmw-carretera.mp4',offset:0},
 {from:113,duration:126,file:'bmw-animacion.mp4',offset:78},
 {from:225,duration:126,file:'bmw-animacion.mp4',offset:174},
 {from:338,duration:126,file:'bmw-animacion.mp4',offset:0},
 {from:450,duration:150,file:'bmw-cierre.png',offset:0,isImage:true},
];
type Clip=typeof clips[number];

const Footage:React.FC<Clip&{index:number}>=({duration,file,offset,isImage,index})=>{
 const f=useCurrentFrame();
 const opacity=interpolate(f,[0,12,duration-12,duration],[index===0?1:0,1,1,index===4?1:0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const src=staticFile('fsautos/'+file);
 return <AbsoluteFill style={{opacity,backgroundColor:'#08151d',overflow:'hidden'}}>
  {isImage?<Img src={src} style={{width:'100%',height:'100%',objectFit:'cover',transform:'scale('+(1+f/1800)+')'}}/>:
   <OffthreadVideo src={src} startFrom={offset} muted style={{width:'100%',height:'100%',objectFit:'cover'}}/>}
 </AbsoluteFill>;
};

const beats=[
 {from:0,duration:111,label:'EL MOMENTO DE VENDER',top:'¿VENDES',bottom:'TU AUTO?',cta:'HABLEMOS DE TU VEHÍCULO'},
 {from:113,duration:111,label:'PRIMER PASO',top:'NOS ENVÍAS',bottom:'LOS DATOS',cta:'SIMPLE Y DIRECTO'},
 {from:225,duration:111,label:'SEGUNDO PASO',top:'EVALUAMOS',bottom:'TU VEHÍCULO',cta:'CONVERSEMOS'},
 {from:338,duration:111,label:'TERCER PASO',top:'RECIBES',bottom:'UNA OFERTA',cta:'FS AUTOS · SANTIAGO'},
];

const Beat:React.FC<{duration:number;label:string;top:string;bottom:string;cta:string}>=({duration,label,top,bottom,cta})=>{
 const f=useCurrentFrame(),o=interpolate(f,[0,10,duration-12,duration],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const slide=interpolate(f,[0,15],[75,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <AbsoluteFill style={{opacity:o,color:WHITE,fontFamily:'Arial,Helvetica,sans-serif'}}>
  <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(3,12,22,.85),transparent 32%,transparent 46%,rgba(3,12,22,.96) 100%)'}}/>
  <div style={{position:'absolute',top:123,left:75,fontSize:36,fontWeight:900}}><span style={{color:BLUE}}>■</span> &nbsp;FS AUTOS</div>
  <div style={{position:'absolute',bottom:278,left:76,right:60,transform:'translateY('+slide+'px)'}}>
   <div style={{fontSize:36,fontWeight:600,marginBottom:24,color:'#d4e8ef'}}>{label}</div>
   <div style={{fontSize:98,fontWeight:900,letterSpacing:-3,lineHeight:1.08}}>{top}</div>
   <div style={{fontSize:108,fontWeight:900,letterSpacing:-3,lineHeight:1.08,color:BLUE}}>{bottom}</div>
  </div>
  <div style={{position:'absolute',bottom:126,left:76,right:76,borderRadius:19,background:'#087ca3',height:94,display:'flex',alignItems:'center',justifyContent:'center',fontSize:36,fontWeight:800}}>{cta}</div>
 </AbsoluteFill>;
};

const Closing:React.FC=()=>{
 const f=useCurrentFrame(),o=interpolate(f,[0,12],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <AbsoluteFill style={{opacity:o,fontFamily:'Arial,Helvetica,sans-serif',color:WHITE}}>
  <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(2,10,20,.3) 0%,rgba(2,10,20,.25) 32%,rgba(2,10,20,.95) 80%,#020b13 100%)'}}/>
  <Img src={staticFile('fsautos/logo-fs-autos.png')} style={{position:'absolute',top:94,left:130,width:820,height:300,objectFit:'contain',mixBlendMode:'screen',filter:'drop-shadow(0 0 12px rgba(0,184,219,0.12))'}}/>
  <div style={{position:'absolute',bottom:360,left:60,right:60,textAlign:'center',fontWeight:900}}>
   <div style={{fontSize:104}}>QUEREMOS</div><div style={{fontSize:109}}>COMPRAR</div><div style={{fontSize:123,color:BLUE}}>TU AUTO</div>
  </div>
  <div style={{position:'absolute',bottom:156,left:90,right:90,padding:'30px 0',borderRadius:19,textAlign:'center',fontSize:57,fontWeight:900,background:BLUE,color:'#02141e'}}>ESCRÍBENOS HOY</div>
  <div style={{position:'absolute',bottom:68,left:40,right:40,display:'flex',alignItems:'center',justifyContent:'center',gap:18,fontSize:43,fontWeight:800}}>
    <svg width="52" height="52" viewBox="0 0 64 64" aria-label="WhatsApp">
      <path fill="#25D366" d="M32 5a27 27 0 0 0-23.4 40.5L5 59l14-3.6A27 27 0 1 0 32 5z"/>
      <path fill="#fff" d="M32 11a21 21 0 0 0-18.1 31.7l-2.3 8.8 9.1-2.3A21 21 0 1 0 32 11zm0 37a16 16 0 0 1-8.3-2.2l-1.2-.7-5.3 1.4 1.4-5.2-.8-1.2A16 16 0 1 1 32 48z"/>
      <path fill="#fff" d="M24 21c-1 0-1.9.4-2.5 1.1-1.2 1.5-2.4 3.5-2.4 5.8 0 2.5 1.8 5.8 4.5 8.5 2.9 3 6 4.5 9.7 5.2 2.7.6 4.6.5 6.3-.6 1.6-1 2.7-2.5 3-4.2.1-.5 0-1-.6-1.3l-5-2.4c-.7-.3-1.1-.1-1.6.5l-2 2.2c-.4.5-.8.6-1.5.3a17 17 0 0 1-5-3.1 19 19 0 0 1-3.5-4.4c-.4-.6 0-.9.3-1.2l1.5-1.7c.4-.5.5-.9.2-1.5l-2.1-5c-.3-.7-.7-1.1-1.4-1.1z"/>
    </svg>
    <span>+56 9 7715 2253</span>
  </div>
 </AbsoluteFill>;
};

export const FSAutos:React.FC=()=> <AbsoluteFill style={{background:'#02111a'}}>
 {clips.map((clip,i)=><Sequence key={i} from={clip.from} durationInFrames={clip.duration}><Footage {...clip} index={i}/></Sequence>)}
 {beats.map((b,i)=><Sequence key={i} from={b.from} durationInFrames={b.duration}><Beat duration={b.duration} label={b.label} top={b.top} bottom={b.bottom} cta={b.cta}/></Sequence>)}
 <Sequence from={450} durationInFrames={150}><Closing/></Sequence>
</AbsoluteFill>;

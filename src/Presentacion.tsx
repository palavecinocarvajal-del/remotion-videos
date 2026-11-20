import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring} from 'remotion';

const W='#ffffff', G='#86edaf', BG='#07151a';
const Fade: React.FC<{from:number; to:number; children:React.ReactNode}> = ({from,to,children})=>{
const f=useCurrentFrame(); const o=interpolate(f,[from,from+14,to-16,to],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
return <div style={{opacity:o,position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:90}}>{children}</div>;
};
export const Presentacion:React.FC=()=>{
const f=useCurrentFrame();const {fps}=useVideoConfig();const grow=spring({frame:f,fps,config:{damping:13}});
const spin=f*0.22;
return <AbsoluteFill style={{background:BG,fontFamily:'Arial, sans-serif',color:W,overflow:'hidden'}}>
<div style={{position:'absolute',left:-340,top:150,width:890,height:890,border:'3px solid #173c33',borderRadius:'50%',transform:`rotate(${spin}deg)`}}/>
<div style={{position:'absolute',right:-260,bottom:150,width:850,height:850,border:'2px solid #1f4e42',borderRadius:'50%',transform:`rotate(${-spin}deg)`}}/>
<div style={{position:'absolute',left:80,right:80,top:88,display:'flex',justifyContent:'space-between',alignItems:'center',fontWeight:700,fontSize:34,letterSpacing:2}}>
<span style={{color:G}}>‚óè RECICLARED</span><span style={{fontSize:22,letterSpacing:4,color:'#b4c9c3'}}>ECONOM√çA CIRCULAR</span>
</div>
<Fade from={0} ∂ªßq´^
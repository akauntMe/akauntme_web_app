import React from 'react'

interface IconProps {
  className: string
}

const ProfileIcon: React.FC<IconProps> = ({ className }) => {
  return <>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="WAgXaM_UXsUB6GpGcg7bda" x1="15.002" x2="33.584" y1="6.494" y2="42.647" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5961c3" /><stop offset="1" stopColor="#3a41ac" /></linearGradient><path fill="url(#WAgXaM_UXsUB6GpGcg7bda)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><radialGradient id="WAgXaM_UXsUB6GpGcg7bdb" cx="24" cy="20" r="9.5" gradientUnits="userSpaceOnUse"><stop offset="0" /><stop offset="1" stopOpacity="0" /></radialGradient><circle cx="24" cy="20" r="9.5" fill="url(#WAgXaM_UXsUB6GpGcg7bdb)" /><radialGradient id="WAgXaM_UXsUB6GpGcg7bdc" cx="23.861" cy="43.918" r="14.991" gradientUnits="userSpaceOnUse"><stop offset=".177" /><stop offset="1" stopOpacity="0" /></radialGradient><path fill="url(#WAgXaM_UXsUB6GpGcg7bdc)" d="M24,44c5.396,0,10.284-2.148,13.882-5.622C35.601,32.755,30.078,29,24,29s-11.601,3.755-13.882,9.378C13.716,41.852,18.604,44,24,44z" /><linearGradient id="WAgXaM_UXsUB6GpGcg7bdd" x1="21.13" x2="26.832" y1="11.924" y2="25.98" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#a6acfc" /><stop offset=".287" stopColor="#a0a7fa" /><stop offset=".651" stopColor="#9198f4" /><stop offset="1" stopColor="#7b83eb" /></linearGradient><circle cx="24" cy="19" r="8" fill="url(#WAgXaM_UXsUB6GpGcg7bdd)" /><linearGradient id="WAgXaM_UXsUB6GpGcg7bde" x1="21.686" x2="25.267" y1="30.136" y2="43.993" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#a6acfc" /><stop offset=".287" stopColor="#a0a7fa" /><stop offset=".651" stopColor="#9198f4" /><stop offset="1" stopColor="#7b83eb" /></linearGradient><path fill="url(#WAgXaM_UXsUB6GpGcg7bde)" d="M24,44c5.015,0,9.587-1.859,13.098-4.909C35.107,33.784,30.002,30,24,30s-11.107,3.784-13.098,9.091C14.413,42.141,18.985,44,24,44z" /></svg>
  </>
}

export default ProfileIcon;
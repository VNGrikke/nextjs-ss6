"use client";
import React from 'react';

interface Slug {
    slug: string[]; 
}

interface Prop {
    params: Slug;
}

export default function ProductDetail(props: Prop) {
    const { params } = props; 
    console.log(params.slug); 
    
    return (
        <div>Duong dan: {params.slug.join("/")}</div> 
    );
}

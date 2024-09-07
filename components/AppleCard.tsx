import { Button } from "@/components/ui/button"
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data } from "@/lib/data";
import { AppleCardProps, CardContentProps } from "@/types";

export function AppleCard({title}:AppleCardProps) {
  const cards = data.map(({id, category, title, src, bgImage, cast }, index) => (
    <Card key={src} index={index} bgImage={bgImage!} card={{ category, title, src, content: <Content cast = {cast!} id={id} /> }} />
  ));
  
  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} title={title}/>
    </div>
  );
}


const Content = ({cast, id}:CardContentProps)=>{
  return (
    <>
      <h1 className="text-2xl font-semibold mx-2 my-2">Cast</h1>
    <div className="flex gap-2" >
      {cast.map((star)=>(
        <div key={star} className="rounded-full p-2 border border-black bg-black">
          <h1 className="font-semibold text-sm">{star}</h1>
        </div>
      ))}
    </div>
    <a href={`/book-ticket/${id}`}>
      <Button className="rounded-full bg-red-500 p-5 text-xl font-light mt-5 text-white">Book Now</Button>
    </a>
    </>
  )
}




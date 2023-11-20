// import { useEffect, useState } from "react";
// import RevealOnView from "@/components/revealOnView";
// import { firestore } from "@/firebase";

// async function getGallery() {
// 	return await firestore.getCollection("gallery");
// }

// function GalleryItem({ src, alt, ...rest }) {
// 	return (
// 		<RevealOnView
// 			className="relative w-60 md:w-72 lg:w-80 aspect-square rounded-lg overflow-hidden bg-neutral-focus border-primary-content"
// 			{...rest}
// 		>
// 			<img src={src} alt={alt} className="w-full h-full object-contain" />
// 		</RevealOnView>
// 	);
// }

// export default function Gallery({ number = Infinity }) {
// 	const [gallery, setGallery] = useState([]);

// 	useEffect(() => {
// 		getGallery().then((gallery) =>
// 			setGallery(
// 				gallery.length > number
// 					? gallery.slice(0, number === Infinity ? undefined : number)
// 					: gallery
// 			)
// 		);
// 	}, []);

// 	return (
// 		<div className="flex flex-col md:flex-row gap-8">
// 			{gallery.map((item) => (
// 				<GalleryItem
// 					key={item._id}
// 					src={item.image}
// 					alt={"gallery_image_" + item._id}
// 				/>
// 			))}
// 		</div>
// 	);
// }
import { useEffect, useState } from "react";
import RevealOnView from "@/components/revealOnView";
import { firestore } from "@/firebase";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

async function getGallery() {
  return await firestore.getCollection("gallery");
}

function GalleryItem({ src, alt, aspectRatio, ...rest }) {
	return (
	  <RevealOnView
		className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 aspect-none overflow-hidden bg-neutral-focus border-primary-content"
		{...rest}
	  >
		<div className={`pinhole-container aspect-${aspectRatio} flex items-center justify-center`}>
		  <img src={src} alt={alt} className="object-cover max-w-full max-h-full" />
		</div>
	  </RevealOnView>
	);
  }

export default function Gallery({ number = Infinity }) {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery().then((gallery) =>
      setGallery(
        gallery.length > number
          ? gallery.slice(0, number === Infinity ? undefined : number)
          : gallery
      )
    );
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-4">
      {gallery.map((item) => (
        <GalleryItem
          key={item._id}
          src={item.image}
          alt={"gallery_image_" + item._id}
          aspectRatio={item.aspectRatio}
        />
      ))}
    </div>
  );
}

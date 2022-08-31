import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx';
import Gallery from './Gallery.jsx';
import ProductFeatures from './ProductFeatures.jsx';

// // MOCK DATA

// const product = {
//   id: 1,
//   name: 'Air Minis 250',
//   slogan: 'Full court support',
//   description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
//   category: 'Basketball Shoes',
//   default_price: '0',
//   features: [
//     {
//       feature: 'Sole',
//       value: 'Rubber',
//     },
//     {
//       feature: 'Material',
//       value: 'FullControlSkin',
//     },
//   ],
// };
// const allStyles = [
//   {
//     style_id: 1,
//     name: 'Forest Green & Black',
//     original_price: '140',
//     sale_price: '0',
//     'default?': true,
//     photos: [
//       {
//         thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_58_427917_chip.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       {
//         thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       // ...
//     ],
//     skus: {
//       37: {
//         quantity: 8,
//         size: 'XS',
//       },
//       38: {
//         quantity: 16,
//         size: 'S',
//       },
//       39: {
//         quantity: 17,
//         size: 'M',
//       },
//       // ...
//     },
//   },
//   {
//     style_id: 2,
//     name: 'Ocean Blue & White',
//     original_price: '140',
//     sale_price: '0',
//     'default?': false,
//     photos: [
//       {
//         thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_65_427917_chip.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       {
//         thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       // ...
//     ],
//     skus: {
//       40: {
//         quantity: 3,
//         size: 'XS',
//       },
//       41: {
//         quantity: 4,
//         size: 'S',
//       },
//       42: {
//         quantity: 13247,
//         size: 'M',
//       },
//       // ...
//     },
//   },
//   {
//     style_id: 3,
//     name: 'Fire Red & Orange',
//     original_price: '140',
//     sale_price: '30',
//     'default?': false,
//     photos: [
//       {
//         thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_27_427917_chip.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       {
//         thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       // ...
//     ],
//     skus: {
//       37: {
//         quantity: 8,
//         size: 'XS',
//       },
//       38: {
//         quantity: 16,
//         size: 'S',
//       },
//       39: {
//         quantity: 17,
//         size: 'M',
//       },
//       // ...
//     },
//   },
//   {
//     style_id: 4,
//     name: 'Stone Grey',
//     original_price: '140',
//     sale_price: '0',
//     'default?': false,
//     photos: [
//       {
//         thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_08_427917_chip.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       {
//         thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       // ...
//     ],
//     skus: {
//       40: {
//         quantity: 0,
//         size: 'XS',
//       },
//       41: {
//         quantity: 0,
//         size: 'S',
//       },
//       42: {
//         quantity: 0,
//         size: 'M',
//       },
//       // ...
//     },
//   },
//   {
//     style_id: 5,
//     name: 'Forest Green & Black',
//     original_price: '140',
//     sale_price: '0',
//     'default?': false,
//     photos: [
//       {
//         thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_58_427917_chip.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       {
//         thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       // ...
//     ],
//     skus: {
//       37: {
//         quantity: 8,
//         size: 'XS',
//       },
//       38: {
//         quantity: 16,
//         size: 'S',
//       },
//       39: {
//         quantity: 17,
//         size: 'M',
//       },
//       // ...
//     },
//   },
//   {
//     style_id: 6,
//     name: 'Ocean Blue & White',
//     original_price: '140',
//     sale_price: '0',
//     'default?': false,
//     photos: [
//       {
//         thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_65_427917_chip.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       {
//         thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       // ...
//     ],
//     skus: {
//       40: {
//         quantity: 3,
//         size: 'XS',
//       },
//       41: {
//         quantity: 4,
//         size: 'S',
//       },
//       42: {
//         quantity: 13247,
//         size: 'M',
//       },
//       // ...
//     },
//   },
//   {
//     style_id: 7,
//     name: 'Fire Red & Orange',
//     original_price: '140',
//     sale_price: '30',
//     'default?': false,
//     photos: [
//       {
//         thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_27_427917_chip.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       {
//         thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       // ...
//     ],
//     skus: {
//       37: {
//         quantity: 8,
//         size: 'XS',
//       },
//       38: {
//         quantity: 16,
//         size: 'S',
//       },
//       39: {
//         quantity: 17,
//         size: 'M',
//       },
//       // ...
//     },
//   },
//   {
//     style_id: 8,
//     name: 'Stone Grey',
//     original_price: '140',
//     sale_price: '0',
//     'default?': false,
//     photos: [
//       {
//         thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_08_427917_chip.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       {
//         thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//         url: 'urlplaceholder/style_1_photo_number.jpg',
//       },
//       // ...
//     ],
//     skus: {
//       40: {
//         quantity: 0,
//         size: 'XS',
//       },
//       41: {
//         quantity: 0,
//         size: 'S',
//       },
//       42: {
//         quantity: 0,
//         size: 'M',
//       },
//       // ...
//     },
//   }];
// // ================================================================

function ProductDetailPage({ product, allStyles, allPhotos }) {
  console.log('PDP RENDER');
  console.log(product);
  const [currStyle, setStyle] = useState({});
  const [currPhotoSet, setCurrPhotoSet] = useState(allPhotos[0] || {});

  useEffect(() => {
    console.log('pdp use effect');
    if (product) {
      console.log(product);
      console.log('IN SET BLOCK');
      console.log(allStyles[0]);
      setStyle(allStyles[0]);
      setCurrPhotoSet(allPhotos[allStyles[0].style_id]);
      console.log(currStyle);
    }
  }, [allStyles]);

  // useEffect(() => {
  //
  // }, [allStyles]);

  const updateStyleImage = (id) => {
    console.log("UPDATE IMAGES TRIGGER");
    console.log(allPhotos[id]);
    setCurrPhotoSet(allPhotos[id]);
  };

  return (
    <div>
      <div id="productContainer">
        <div id="productMain">
          <div>
            <Gallery photos={currPhotoSet} product={product} />
          </div>
          <div id="productFeatures">
            <ProductFeatures
              slogan={product?.slogan}
              description={product?.description}
              features={product?.features}
            />
          </div>
        </div>
        <div id="sidebarContainer">
          <div id="sidebar">
            <Sidebar
              productName={product?.name}
              productCategory={product?.category}
              allStyles={allStyles}
              updateStyleImage={updateStyleImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;

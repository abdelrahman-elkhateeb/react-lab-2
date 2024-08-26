import img from "../../imgs/image-product-1.jpg";
import productThumbImgOne from "../../imgs/image-product-1-thumbnail.jpg";
import productThumbImgTwo from "../../imgs/image-product-2-thumbnail.jpg";
import productThumbImgThree from "../../imgs/image-product-3-thumbnail.jpg";
import productThumbImgFour from "../../imgs/image-product-4-thumbnail.jpg";
import ImgSlider from "../../components/ImgSlider";
import UseAppGalleryContext from "../../context/UseAppGalleryContext";

const imgs = [
  { id: 1, prod: productThumbImgOne },
  { id: 2, prod: productThumbImgTwo },
  { id: 3, prod: productThumbImgThree },
  { id: 4, prod: productThumbImgFour },
];

function AppGallery() {
  const { setIsImgSliderOpen } = UseAppGalleryContext();
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => {
          setIsImgSliderOpen(true);
        }}
      >
        <div className="mb-5">
          <img src={img} alt="" className="rounded-2xl lg:w-9/12" />
        </div>
        <div className="flex gap-3 lg:w-9/12">
          {imgs.map((img) => (
            <div key={img.id}>
              <img src={img.prod} className="rounded-lg" alt="product image" />
            </div>
          ))}
        </div>
      </div>
      <ImgSlider />
    </>
  );
}

export default AppGallery;

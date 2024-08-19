export default function BookList() {
   let pageTitle = "New Books";
   let book1 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781454959564_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5Dom";
   let book2 = "https://prodimage.images-bn.com/pimages/9780593133491_p0_v2_s600x595.jpg";
   let book3 = "https://prodimage.images-bn.com/pimages/9798887240206_p0_v1_s600x595.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="What to Cook" />
         <img src={book2} alt="Long Island Comprimise" />
         <img src={book3} alt="Godzilla" />
      </div>      
   );
}
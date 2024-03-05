import { useState } from "react";

const ImageBlob = () => {
    const [imgs, setImgs] = useState();

    const handleChange = (e) => {
        const file = e.target.files[0];
        const data = new FileReader();
        data.addEventListener('load', () => {
            setImgs(data.result);
        });
        data.readAsDataURL(file);
    };

    //Saber si se esta convirtiendo la imagen
   console.log(imgs);

    return (
        <div>
            <input type="file" onChange={handleChange} /><br />
            <img src={imgs} height="200px" width="200px" />
        </div>
    );
};

export default ImageBlob;

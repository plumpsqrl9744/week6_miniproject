import { useState } from "react"
import "./FileUpload.scss";
import Button from 'react-bootstrap/Button';


const FileUpload = () => {
    const [posts, setPosts] = useState([
        {
          image : "가",
          title : "나",
          content:"다"
        }
      ]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [imgSelect , setImgSelect] = useState(false)
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        setImgSelect((prev) => !prev)
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        console.log(imagesArray)
        // setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        setSelectedImages(imagesArray)
        // FOR BUG IN CHROME
        event.target.value = "";
    };

    const deleteHandler = (image) => {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
        setImgSelect((prev) => !prev)
    }
    const ImageUpload = () => {
    return(
        <label className="img-label">
            {imgSelect ? null 
                : <div>
                + Add image
                </div>}
            <input
            type="file"
            name="images"
            onChange={onSelectFile}
            accept="image/png , image/jpeg, image/webp"
            className="file-input"
            />
            <div className="images">
                {selectedImages &&
                selectedImages.map((image, index) => {
                    return (
                    <div key={image} className="image">
                        <img src={image} height="330" alt="upload" className="image"/>
                        <Button variant="primary" onClick={() => deleteHandler(image)}>
                            Delete
                        </Button>
                    </div>
                    );
                })}
            </div>
        </label>
        )
    }
    return (
        <div className='fileupload'>
            <ImageUpload></ImageUpload>
        </div>
    )
}

export default FileUpload
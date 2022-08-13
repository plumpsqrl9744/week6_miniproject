import { useState } from "react"
import "./FileUpload.scss";
import Button from 'react-bootstrap/Button';


const FileUpload = () => {
    
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        console.log(imagesArray)
        // setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        setSelectedImages(imagesArray)
        // FOR BUG IN CHROME
        event.target.value = "";
    };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  const ImageUpload = () => {
    return(
        <label>
            + Add images
            <input
            type="file"
            name="images"
            onChange={onSelectFile}
            accept="image/png , image/jpeg, image/webp"
            />
            <div className="images">
                {selectedImages &&
                selectedImages.map((image, index) => {
                    return (
                    <div key={image} className="image">
                        <img src={image} height="400" alt="upload" className="image"/>
                        <Button variant="primary" onClick={() => deleteHandler(image)}>
                        delete
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
        <Button style={{backgroundColor:'rgb(255, 242, 0)',color:"black", border:"none"}}>Example</Button>
    </div>
  )
}

export default FileUpload
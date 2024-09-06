import React, {useState} from 'react';
import { router } from '@inertiajs/react'

const UploadModal = ({ isOpen, closeModal}) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState('');
    const [error, setError] = useState('');
    
    if (!isOpen) return null;

    const categories = [
        { id: 1, label: 'Men' },
        { id: 2, label: 'Women' },
        { id: 3, label: 'Kids' }
    ];
    
    const subCategories = {
        1: [
        { id: 1, label: 'T-Shirts' },
        { id: 2, label: 'Polo' },
        { id: 3, label: 'Bottom' },
        { id: 4, label: 'Shirts' },
        { id: 5, label: 'Sweat Shirts' },
        { id: 6, label: 'Trousers' },
        { id: 7, label: 'Sweaters' },
        { id: 8, label: 'Jacket' }
        ],
        2: [
        { id: 1, label: 'Tops' },
        { id: 2, label: 'Bottoms' }
        ],
        3: [
        { id: 1, label: 'T-Shirts & Tops' },
        { id: 2, label: 'Sweaters & Sweat Shirt' },
        { id: 3, label: 'Trousers' },
        { id: 4, label: 'Jeans' },
        { id: 5, label: 'Shorts' }
        ]
    };  

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedSubCategory('');
    };

    const handleSubCategoryChange = (event) => {
        setSelectedSubCategory(event.target.value);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    
        if (selectedFile) {
          const fileUrl = URL.createObjectURL(selectedFile);
          setFilePreview(fileUrl);
        } else {
          setFilePreview('');
        }
    };

    const handleCloseModal = () => {
        setSelectedCategory('');
        setSelectedSubCategory('');
        setFile(null);
        setFilePreview('');
        setError('');
        closeModal();
    };

    const handleUpload = () => {
        if (file && selectedCategory && selectedSubCategory) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('category', selectedCategory);
            formData.append('subCategory', selectedSubCategory);

            // Assuming the route for handling file uploads is '/upload'
            router.post('/product-upload', formData, {
                onSuccess: () => {
                    closeModal();
                },
                onError: () => {
                    console.log(error);
                }
            });
        }else{
            setError("Please fill up all the fields.");
        }
    };
    return (
        <>
            <div className="modal-backdrop show"/>
            <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Upload Product</h5>
                    <button type="button" className="close" onClick={handleCloseModal}>
                        <span className="fs-3">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}
                        <p className="fs-5"><i className="text-danger">*</i>Category </p>
                        <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange} className="form-select" required>
                        <option value="">Select a category</option>
                        {categories.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.label}
                            </option>
                        ))}
                        </select>

                        <p className="fs-5 mt-4"><i className="text-danger">*</i>Sub-Category </p>
                        <select name="subCategory" id="subCategory" value={selectedSubCategory} onChange={handleSubCategoryChange} disabled={!selectedCategory} className="form-select" required>
                        <option value="">Select a subcategory</option>
                        {selectedCategory &&
                            subCategories[selectedCategory]?.map((subCategory) => (
                                <option key={subCategory.id} value={subCategory.id}>
                                    {subCategory.label}
                                </option>
                        ))}
                        </select>

                        <p className="fs-5 mt-4"><i className="text-danger">*</i>Image (Only Images and Max File Size: 5 MB)</p>
                        <input
                            type="file"
                            id="fileUpload"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />

                        {filePreview && (
                                <div>
                                <h4>File Preview:</h4>
                                <img src={filePreview} alt="File Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                                </div>
                        )}
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-success" onClick={handleUpload}>
                        Upload
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default UploadModal;

import { useState, useEffect } from "react";
import { getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const AdditemsImagePage = () => {
    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    const [loading, setLoading] = useState(false);
    const [isUploaded, setUploaded] = useState(false);

    useEffect(() => {
      if (!file) {
        setPreview(undefined);
        return;
      }
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }, [file]);

    function handleSetFile(event) {
        setFile(event.target.files[0]);
    }

    const uploadFileToFirebase = (tags) => {
        if (!file) {
            alert('Please upload an image first!');
            return;
        }
        const storage = getStorage();
        const storageRef = ref(storage, "image/" + file.name);

        const uploadImage = uploadBytesResumable(storageRef, file);
        uploadImage.on(
        "state_changed",
        (snapshot) => {
            setLoading(true);
        },
        (err) => {
            console.log(err);
        },
        () => {
            setLoading(false);
            setFile(undefined);
            setUploaded(true);
            setTimeout(() => setUploaded(false), 3000);
            getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              tags.url = downloadURL;
              uploadDataToFirestore(tags);
            });
        }
        );
    };

    // ここから工事
    async function uploadDataToFirestore(tags) {
        if (!file) {
            alert('Please upload an image first!');
            return;
        }

        try {
          const docRef = await addDoc(collection(db, "items"), tags);
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.log(e);
        }
    };
    // ここまで


    const handleSubmit = async (event) => {
        event.preventDefault();
        const { category1, category2, color, season } = event.target.elements;
        console.log(category1.value,category2.value, color.value, season.value)

        const tags = {
            category1: category1.value,
            category2: category2.value,
            color: color.value,
            season: season.value,
        };
        uploadFileToFirebase(tags);
    };

    // get a list of data
    async function getAll() {
      const querySnapshot = await getDocs(collection(db, "items"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }

    return (
        <>
        {loading ? (<h2>アップロード中・・・</h2>
        ) : (
          <>
          {isUploaded ? (<h2>アップロード完了しました！</h2>) : (
            <>
            <h2>Additems</h2>
            <div class="flex justify-center mt-8">
                <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                {file ? <img src={preview} /> :
                    <div class="m-4">
                        <label class="inline-block mb-2 text-gray-500">File Upload</label>
                        <div class="flex items-center justify-center w-full">
                            <label
                                class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                <div class="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Attach a file</p>
                                </div>
                                <input type="file" class="opacity-0" accept=".png, .jpeg, .jpg" onChange={handleSetFile}/>
                            </label>
                        </div>
                    </div>
                  }
                    <div class="flex justify-center p-2">
                        {/* <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl" type="file" accept=".png, .jpeg, .jpg" onChange={OnFileUploadToFirebase}>Create</button> */}
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} class="w-10/12 mx-auto md:max-w-md">
                <div class="mb-8">
                    <label for="category1" class="text-sm block">大カテゴリ</label>
                    <input type="text" id="category1" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="例）トップス"/>
                </div>
                <div class="mb-8">
                    <label for="category2" class="text-sm block">小カテゴリ</label>
                    <input type="text" id="category2" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="例）セーター"/>
                </div>
                <div class="mb-8">
                    <label for="color" class="text-sm block">色・柄</label>
                    <input type="text" id="color" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="例）ホワイト"/>
                </div>
                <div class="mb-8">
                    <label for="season" class="text-sm block">季節</label>
                    <input type="text" id="season" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="例）春"/>
                </div>
                <button class="bg-gray-700 hover:bg-gray-600 text-white rounded px-4 py-2">登録</button>
            </form>
            </>
          )}
          </>
        )}
        </>

    );
};

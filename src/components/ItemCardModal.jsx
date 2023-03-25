import React from "react";

// export default function Modal() {
export const Modal = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Detail
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg my-6 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto m-3">
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    ここにアイテム詳細（画像、属性データ）が表示される予定
                  </p>
                  <div class="m-3"> */}
                    <img
                      src={props.img}
                      class="w-full aspect-square object-contain rounded-2xl"
                      alt="sample"
                    />
                    <ul>
                      <li className="my-4 text-slate-500 text-lg leading-relaxed">
                        大カテゴリ：{/* firebaseからデータを取得 */}
                      </li>
                      <li className="my-4 text-slate-500 text-lg leading-relaxed">
                        小カテゴリ：{/* firebaseからデータを取得 */}
                      </li>
                      <li className="my-4 text-slate-500 text-lg leading-relaxed">
                        色・柄：{/* firebaseからデータを取得 */}
                      </li>
                      <li className="my-4 text-slate-500 text-lg leading-relaxed">
                        季節：{/* firebaseからデータを取得 */}
                      </li>
                    </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
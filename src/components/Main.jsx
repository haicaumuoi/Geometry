import React, { useState } from 'react';
import '../custom.css';
import '../index.css';
import DropdownBtn from './Dropdown';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Main = () => {
  const [advertisingModal, setAdvertisingModal] = React.useState(false);
  const [featureModal, setFeatureModal] = React.useState(false);
  const [descriptionModal, setDescriptionModal] = React.useState(false);

  const featuresValue = {
    features: [
      {
        id: 1,
        text: 'User research',
        des: 'Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn magna bibendum imperdiet nullam orci pede.',
      },
      {
        id: 2,
        text: 'Getting stakeholder',
        des: 'Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.',
      },
      {
        id: 3,
        text: 'User Interaction',
        des: ' Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna.',
      },
    ],
  };

  const descriptionValue = {
    description: [
      {
        id: 1,
        text: 'Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand praesent blandit lacinia erat vestibulum sed.',
      },
      {
        id: 2,
        text: 'Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
      },
      {
        id: 3,
        text: 'Liam neque vestibulum eget vulputate ut ultrices vel.',
      },
    ],
  };

  const [adverstisingValue, setAdvertisingValue] = useState({
    title: 'Gembucket',
    hashtag: [
      '#solar_breeze',
      '#red_hold',
      '#card_guard',
      '#lotstring',
      '#tough_joy_fax',
      '#tough_joy',
      '#cardify',
    ],
    text: 'Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis lectus suspendisse.',
    site: 'https://gembucket.com',
  });

  const [title, setTitle] = useState(adverstisingValue.title);
  const [hashtag, setHashtag] = useState(adverstisingValue.hashtag);
  const [text, setText] = useState(adverstisingValue.text);
  const [site, setSite] = useState(adverstisingValue.site);
  const [description, setDescription] = useState(descriptionValue.description);

  const [feature1, setFeature1] = useState(featuresValue.features[0].text);
  const [feature2, setFeature2] = useState(featuresValue.features[1].text);
  const [feature3, setFeature3] = useState(featuresValue.features[2].text);
  const [featureDes1, setFeatureDes1] = useState(featuresValue.features[0].des);
  const [featureDes2, setFeatureDes2] = useState(featuresValue.features[1].des);
  const [featureDes3, setFeatureDes3] = useState(featuresValue.features[2].des);

  const handleSave = () => {
    setAdvertisingValue({ title, hashtag, text, site });
    setAdvertisingModal(false);
  };

  return (
    <main>
      <section className="section-1">
        <h1 className="super-big-text">{adverstisingValue.title}</h1>
        <div className="hashtag">
          {adverstisingValue.hashtag.map((item) => (
            <span className="hashtag-item">{item}</span>
          ))}
        </div>
        <p className="gembucket-text">{adverstisingValue.text}</p>
        <div className="gembucket-site">
          Official site:
          <span className="gembucket-link ml-2">{adverstisingValue.site}</span>
        </div>
        <div className="carousel">
          <div className="slideshow-container">
            <div>
              <img
                src="img/Rectangle.png"
                alt="regtangle"
                className="carousel-img"
              />
            </div>
            <div className="dots-container">
              <span className="dot" onClick={() => currentSlide(1)}></span>
              <span
                className="dot active"
                onClick={() => currentSlide(2)}
              ></span>
              <span className="dot" onClick={() => currentSlide(3)}></span>
              <span className="dot" onClick={() => currentSlide(4)}></span>
              <span className="dot" onClick={() => currentSlide(5)}></span>
            </div>
          </div>
        </div>
        <div
          className="modify cursor-pointer"
          onClick={() => {
            setAdvertisingModal(true);
          }}
        >
          <img
            src="img/STUDENT - PROJECT/Vector.svg"
            alt="modify"
            className="vector"
          />
        </div>
      </section>
      <section>
        <div>
          <h1 className="big-text">Description</h1>
          <ul>
            {descriptionValue.description.map((item) => (
              <li key={item.id} className="description-item list-disc ml-5">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="modify cursor-pointer"
          onClick={() => {
            setDescriptionModal(true);
          }}
        >
          <img
            src="img/STUDENT - PROJECT/Vector.svg"
            alt="modify"
            className="vector"
          />
        </div>
      </section>
      <section className="section-feature">
        <div>
          <h1 className="big-text">Features</h1>
          <div className="big-feature-container">
            <div className="feature-container">
              <div className="feature-box-text">
                <p>{feature1}</p>
              </div>
              <span className="feature-box-style z-10"></span>
              <div className="feature-text-relative">
                <img
                  src="img/STUDENT - PROJECT/pic3.jpg"
                  alt="pic 1"
                  className="feature-img"
                />
                <p className="feature-text">{featureDes1}</p>
                <span className="feature-box-line"></span>
              </div>
            </div>
            <div className="feature-container">
              <div className="feature-box-text-2">
                <p>{feature2}</p>
              </div>
              <span className="feature-box-style-2 z-10"></span>
              <div className="feature-text-relative">
                <img
                  src="img/STUDENT - PROJECT/pic1.jpg"
                  alt="pic 2"
                  className="feature-img img-2"
                />
                <p className="feature-text-2">{featureDes2}</p>
                <span className="feature-box-line"></span>
              </div>
            </div>
            <div className="feature-container">
              <div className="feature-box-text">
                <p>{feature3}</p>
              </div>
              <span className="feature-box-style z-10"></span>
              <div className="feature-text-relative">
                <img
                  src="img/STUDENT - PROJECT/pic2.jpg"
                  alt="pic 3"
                  className="feature-img"
                />
                <p className="feature-text">{featureDes3}</p>
                <span className="feature-box-line"></span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modify"
          onClick={() => {
            setFeatureModal(true);
          }}
        >
          <img
            src="img/STUDENT - PROJECT/Vector.svg"
            alt="modify"
            className="vector"
          />
        </div>
      </section>
      <section className="member">
        <h1 className="big-text">Team-members</h1>
        <div className="member-box">
          <div className="image-container">
            <img src="img/STUDENT - PROJECT/antons.jpg" alt="image" />
            <div className="text">Antons Playden</div>
            <div className="text right">Dental Hygienist</div>
            <span className="member-line"></span>
          </div>
          <div className="image-container">
            <img src="img/STUDENT - PROJECT/lowe.jpg" alt="image" />
            <div className="text">Lowe Coronas</div>
            <div className="text right">Financial Analyst</div>
            <span className="member-line"></span>
          </div>
          <div className="image-container">
            <img src="img/STUDENT - PROJECT/galvan.jpg" alt="image" />
            <div className="text">Galvan Bonifas</div>
            <div className="text right">Media Manager</div>
            <span className="member-line"></span>
          </div>
          <div className="image-container">
            <img src="img/STUDENT - PROJECT/boi.jpg" alt="image" />
            <div className="text">Galvan Bonifas</div>
            <div className="text right">Media Manager</div>
            <span className="member-line"></span>
          </div>
        </div>
      </section>
      <section>
        <h1 className="big-text">Want to know more, contact me</h1>
        <div className="contact-box">
          <div className="email">
            <div className="email-box">
              <img src="img/Vector.svg" alt="mail" className="svg" />
              <p className="social-text">pattietrusdale@gmail.com</p>
            </div>
            <div className="email-box">
              <img src="img/phone.svg" alt="mail" className="svg" />
              <p className="social-text">+8421 223 2234</p>
            </div>
            <div className="email-box">
              <img src="img/location.svg" alt="mail" className="svg" />
              <p className="social-text">34 Milwaukee Avenue</p>
            </div>
          </div>
          <div className="git">
            <div className="social-box">
              <img src="img/github.svg" alt="mail" className="svg" />
              <p className="social-text">github.com/pattietrusdale</p>
            </div>
            <div className="social-box">
              <img src="img/linkedin.svg" alt="mail" className="svg" />
              <p className="social-text">
                linkedin.com/in/pattie-trusdale-34...
              </p>
            </div>
            <div className="social-box">
              <img src="img/facebook.svg" alt="mail" className="svg" />
              <p className="social-text">facebook.com/pattie.trusdale</p>
            </div>
          </div>
        </div>
      </section>
      {advertisingModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center bg-gray-400">
          <div className="modal-content bg-[#F3F3F3]  w-2/5 h-fit  rounded border-none px-5 ">
            <div className="text-xl font-semibold my-5">Project</div>
            <div className="my-3">
              <div>Name</div>
              <input
                className="w-full h-8 border border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <div>Keywords</div>
              <input
                className="w-full h-8 border border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                onPointerLeave={(e) =>
                  setHashtag((prev) => [...prev, e.target.value])
                }
              />
              <div className="w-full flex flex-wrap">
                {hashtag.map((item, index) => {
                  return (
                    <span className="w-30 text-sm flex justify-center items-center mx-2 bg-white rounded-md mt-5">
                      <div className="text-blue-400">{item}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="w-4 h-4 cursor-pointer ml-1"
                        onClick={() => {
                          const newHashtag = hashtag.filter(
                            (item, i) => i !== index
                          );
                          setHashtag(newHashtag);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-10">
              <div>Summary*</div>
              <textarea
                type="text"
                className="w-full border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                rows={5}
                cols={30}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="mt-10">
              <div>Website</div>
              <div className="flex justify-evenly items-center">
                <input
                  className="w-full border-gray-300 rounded-md py-2 px-3 h-8 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                  value={site}
                  onChange={(e) => setSite(e.target.value)}
                />
                <DropdownBtn />
                <div>Remove</div>
              </div>
              <div className="mt-2">Add another website</div>
            </div>
            <div className="flex justify-end items-center">
              <div
                className="w-10 h-10 mx-5 rounded-md px-5 flex justify-center items-center"
                onClick={() => {
                  setAdvertisingModal(false);
                }}
              >
                Cancel
              </div>
              <div
                className="w-10 h-10 bg-blue-500 text-white rounded-md px-8 flex justify-center items-center"
                onClick={handleSave}
              >
                Save
              </div>
            </div>
          </div>
        </div>
      )}

      {descriptionModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-75">
          <div className="modal-content mx-auto my-12 p-10 bg-white rounded shadow-lg">
            <div className="text-xl font-semibold my-5">Description</div>

            <ReactQuill
              theme="snow"
              onChange={setDescription}
              className="mt-10 w-full h-48 rounded-md"
            />

            <div className="flex justify-end items-center mt-20">
              {' '}
              <div
                className="w-10 mx-4 cursor-pointer"
                onClick={() => setDescriptionModal(false)}
              >
                Cancel
              </div>
              <div className="w-14 mx-4 cursor-pointer bg-blue-500 text-white text-center rounded-md">
                Save
              </div>
            </div>
          </div>
        </div>
      )}

      {featureModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-75 z-10000">
          <div className="modal-content w-2/3 h-4/5 mx-auto my-12 p-10 bg-white rounded shadow-lg overflow-y-scroll z-100">
            <div className="text-xl font-semibold my-5 z-100">Feature</div>
            <div className="flex flex-col justify-center mt-5 z-100">
              <div className="justify-between items-start flex">
                <div className="w-1/2 flex justify-center items-center">
                  <img
                    src="img/STUDENT - PROJECT/pic2.jpg"
                    alt="pic 3"
                    className=" w-full h-full"
                  />
                </div>
                <div className="flex justify-evenly w-1/2 flex-col mt-7">
                  <div>
                    <div>Title</div>
                    <input
                      className="w-full h-8 border border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      value={feature1}
                      onChange={(e) => setFeature1(e.target.value)}
                    />
                  </div>
                  <div className="mt-5">
                    <div>Description</div>
                    <textarea
                      className="w-full border border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
                      name=""
                      id=""
                      cols="10"
                      rows="10"
                      value={featureDes1}
                      onChange={(e) => setFeatureDes1(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="justify-between items-start flex">
                <div className="w-1/2 flex justify-center items-center">
                  <img
                    src="img/STUDENT - PROJECT/pic2.jpg"
                    alt="pic 3"
                    className=" w-full h-full"
                  />
                </div>
                <div className="flex justify-evenly w-1/2 flex-col mt-7">
                  <div>
                    <div>Title</div>
                    <input
                      className="w-full h-8 border border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      value={feature2}
                      onChange={(e) => setFeature2(e.target.value)}
                    />
                  </div>
                  <div className="mt-5">
                    <div>Description</div>
                    <textarea
                      className="w-full border border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
                      name=""
                      id=""
                      cols="10"
                      rows="10"
                      value={featureDes2}
                      onChange={(e) => setFeatureDes2(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="justify-between items-start flex">
                <div className="w-1/2 flex justify-center items-center">
                  <img
                    src="img/STUDENT - PROJECT/pic2.jpg"
                    alt="pic 3"
                    className=" w-full h-full"
                  />
                </div>
                <div className="flex justify-evenly w-1/2 flex-col mt-7">
                  <div>
                    <div>Title</div>
                    <input
                      className="w-full h-8 border border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      value={feature3}
                      onChange={(e) => setFeature3(e.target.value)}
                    />
                  </div>
                  <div className="mt-5">
                    <div>Description</div>
                    <textarea
                      className="w-full border border-gray-300 rounded-md py-2 px-3 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
                      name=""
                      id=""
                      cols="10"
                      rows="10"
                      value={featureDes3}
                      onChange={(e) => setFeatureDes3(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex justify-end items-center mt-20 cursor-pointer"
              onClick={() => setFeatureModal(false)}
            >
              Saved
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;

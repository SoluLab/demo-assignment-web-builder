import React, { useEffect, useState } from 'react'
import RightSideBar from './RightSideBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_HOST } from '../api_utils'
import geditorConfig from '../api_utils/geditor_config'
import useInsertComponent from '../Context/InserComponent/useInsertComponent'

const GrapeJsEditor = () => {
    const { SelectedTab, setSelectedTab } = useInsertComponent()
    const [editor, setEditor] = useState(null)
    const [assets, setAssets] = useState([])
    const { pageId } = useParams()
    useEffect(() => {
        async function getAllAssets() {
            try {
                const response = await axios.get(`${API_HOST}assets/`)
                setAssets(response.data)
            } catch (error) {
                setAssets(error.message)
            }
        }
        getAllAssets()
    }, [])

    useEffect(() => {
        const editor = geditorConfig(assets, pageId)
        const script = function() {
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");
        nextButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft += slideWidth;
        });
        prevButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft -= slideWidth;
        });
        };

        const style = `<style>* {
          box-sizing: border-box;
        }

        body {
          max-width: 1440px;
          margin: auto;
        }

        .slider-wrapper {
          margin: 1rem;
          position: relative;
          overflow: hidden;
          max-height: 200px;
          max-width: 400px;
          margin: auto;
        }

        .slides-container {
          height: calc(100vh - 2rem);
          width: 100%;
          display: flex;
          overflow: scroll;
          scroll-behavior: smooth;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .slide-arrow {
          position: absolute;
          display: flex;
          top: 0;
          bottom: 0;
          margin: auto;
          height: 4rem;
          background-color: white;
          border: none;
          width: 2rem;
          font-size: 3rem;
          padding: 0;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 100ms;
        }

        .slide-arrow:hover,
        .slide-arrow:focus {
          opacity: 1;
        }

        #slide-arrow-prev {
          left: 0;
          padding-left: 0.25rem;
          border-radius: 0 2rem 2rem 0;
        }

        #slide-arrow-next {
          right: 0;
          padding-left: 0.75rem;
          border-radius: 2rem 0 0 2rem;
        }

        .slide {
          width: 100%;
          height: 100%;
          flex: 1 0 100%;
        }</style>`;
        editor.Components.addType('custom-carousel', {
          model: {
            defaults: {
              script,
              content: `<section class="slider-wrapper">
              <button class="slide-arrow" id="slide-arrow-prev">
                &#8249;
              </button>
              
              <button class="slide-arrow" id="slide-arrow-next">
                &#8250;
              </button>
              
              <ul class="slides-container" id="slides-container">
                <li class="slide"><img src='https://pixabay.com/get/g7479b53ddd68e30339a28b48adbb7f348aae2e08dc12fe0c8779cf470ce0a60166dccf221c16b336cf4153790667d14e5573647dfd19aa626cb04004ef66480f87405d550f04ce9fdc39a6aed8e42357_640.jpg' /></li>
                <li class="slide"><img src='https://pixabay.com/get/g317fc391800031eec638809d46af8ed0a03320573a09f3983b879079589cfa6f9edbf292a4cf2a9599b51a174f595968f75d9b14eea02e0d319dc40f297e0ed45efdf716d8f4fc3f0144e4121f8210c1_640.jpg' /></li>
                <li class="slide"><img src='https://pixabay.com/get/g377b5ee971166aac5edb9ebf98c9d506c01a87b7ce713e66c5bb92ddc176b81b78e5ccdf8acc5b43765e5184a4194bb1a318f687c32338dd0fba555367e41b5fae0e4caec6daabd4b8d0046afcb88445_640.jpg' /></li>
                <li class="slide"><img src='https://pixabay.com/get/gd6f2408d8658bb375400a035720eeb3371b6f7fc0dee73d647674ba0f3425827b133688196b8f0f590864ae4d5fe5fe0fd973b1ce59a6cf4fff2c3ee48489e31bfddd6a304d26c75c5a0475b39286f01_640.jpg' /></li>
                <li class="slide"><img src='https://pixabay.com/get/gcb0923bc809f77af515680e2393402727281256fe2c39d41c68075f23ab8619b6d4ba35427408b8d1f7fdf4d2969f02b9b22282a7772a9eed493a3f3408950a5451ba25d9b602331e915187e9735418c_640.jpg' /></li>
              </ul>
            </section>${style}`
            }
          }
        });

        editor.Blocks.add('custom-carousel', {
          label: 'Custom Carousel',
          attributes: { class: 'fa fa-text' },
          content: { type: 'custom-carousel',  },
          category: "Rohan's work"
        });
        setEditor(editor)
    }, [pageId, assets, SelectedTab])

    return (
        <div
            className="main-content position-relative " style={{ flex: 3 }}
            id="main-content"

        >
            <div className="row" >
                <div className="col-9" >
                    <div id="editor"
                    ></div>
                </div>
                <div className="col-3 rightsidebar">
                    <div>
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GrapeJsEditor)
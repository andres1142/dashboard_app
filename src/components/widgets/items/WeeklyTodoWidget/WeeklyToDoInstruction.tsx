"use client"
import { useState, useEffect } from "react"
import BlurBackground from "../../common/BlurBackground"
import CreateCategoryModal from "./CreateCategoryModal"
import { Category } from "@/types"

interface InstructionsProps {
  handleShowInstructions: () => void
}

function WeeklyToDoInstructions({ handleShowInstructions }: InstructionsProps) {
  const [showCreateCategory, setShowCreateCategory] = useState(false) // State for showing the create category Modal
  const [categoryList, setCategoryList] = useState<Category[]>([]) // State for the list of categories

  function handleCreateCategoryModal() {
    setShowCreateCategory(!showCreateCategory)
  }

  return (
    <BlurBackground>
      {/*Modal Container*/}
      <div className="w-1/2 inline-block bg-secondary_purple rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all delay-1000">
        <div className="flex flex-wrap justify-center gap-x-10 h-full w-full relative  pb-20 pt-10">
          {/*Content Container*/}
          <div className="flex flex-col flex-start justify-center">
            <h2 className="text-4xl text-center font-motivaMedium text-primary_purple pb-8">
              Weekly To Do Widget
            </h2>

            <article className="text-lg text-secondary_purple-200 font-motivaRegular mx-10 mb-10">
              This widget enables you to generate a weekly task list, complete
              with customizable categories. You have the flexibility to define
              unique colors for each category and associate them with specific
              tasks.
            </article>

            <div className="flex flex-row items-center mx-10 gap-5">
              <h3 className="text-2xl text-left font-motivaMedium text-primary_purple">
                My Categories
              </h3>

              {/* Add Category Button*/}
              <button
                className="p-2 h-6 bg-primary_purple font-motivaRegular text-secondary_purple-200 hover:bg-primary_purple-100 
                            hover:text-primary_purple rounded-full flex justify-center items-center"
                onClick={handleCreateCategoryModal}
              >
                <span className=" text-center text-md">Add New</span>
              </button>

              {/*Create Category Modal*/}
              <CreateCategoryModal
                showCreateCategory={showCreateCategory}
                handleCreateCategoryModal={handleCreateCategoryModal}
                setCategoryList={setCategoryList}
                categoryList={categoryList}
              />
            </div>

            {/*Category List*/}
            <div className="flex flex-wrap flex-col mx-14 mt-4 max-h-24">
              {categoryList.length > 0
                ? categoryList.map((category: Category) => (
                    <div
                      className={
                        "flex flex-row items-center justify-start gap-2"
                      }
                    >
                      <div
                        className={`bg-[${category.color}] w-3 h-3 rounded-full`}
                      />{" "}
                      {/* Circle color*/}
                      <p className="text-lg text-secondary_purple-200 font-motivaMedium">
                        {category.name}
                      </p>
                    </div>
                  ))
                : null}
            </div>
          </div>

          {/*Close Button*/}
          <button
            className="absolute bottom-5 right-5 form-button w-24"
            onClick={handleShowInstructions}
          >
            Cancel
          </button>
        </div>
      </div>
    </BlurBackground>
  )
}

export default WeeklyToDoInstructions

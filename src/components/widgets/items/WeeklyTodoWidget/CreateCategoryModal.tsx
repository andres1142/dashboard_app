import { useState } from "react"
import { Transition, Dialog } from "@headlessui/react"
import { Fragment } from "react"
import ColorOptions from "./ColorOptions"
import { Category } from "@/types"

interface CreateCategoryModalProps {
  showCreateCategory: boolean
  handleCreateCategoryModal: () => void
  setCategoryList: (categoryList: Category[]) => void
  categoryList: Category[]
}

function CreateCategoryModal({
  showCreateCategory,
  handleCreateCategoryModal,
  setCategoryList,
  categoryList,
}: CreateCategoryModalProps) {
  const [error, setError] = useState("")
  const [selected, setSelected] = useState("")
  const [categoryName, setCategoryName] = useState("")

  /**
   * Adds a new category to the list of categories. After adding, it resets selected and categoryName.
   *
   * @param category {name : string, color: string}
   */
  function addCategoryToList(category: Category) {
    if (categoryName === "") {
      setError("Please enter a category name.")
      return
    }
    if (selected === "") {
      setError("Please select a color.")
      return
    }

    setCategoryList([...categoryList, category])
    handleCreateCategoryModal()
    resetStates()
  }

  /**
   * Closes the modal and resets selected and categoryName.
   */
  function handleCloseButton() {
    handleCreateCategoryModal()
    resetStates()
  }

  /**
   * Resets selected, error and categoryName states.
   */
  function resetStates() {
    setSelected("")
    setCategoryName("")
    setError("")
  }

  return (
    <Transition appear show={showCreateCategory} as={Fragment}>
      <Dialog
        as="div"
        onClose={handleCreateCategoryModal}
        className="relative z-20"
      >
        {/*This is the Backgorund of the Modal that will blur the background*/}
        <Transition.Child
          as={Fragment}
          enter="ease-in duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary_purple
                 py-6 px-12 text-left align-middle shadow-xl transition-all"
              >
                <Dialog.Title
                  as="h3"
                  className="text-2xl text-secondary_purple-200 font-motivaMedium text-center"
                >
                  Create a New Category
                </Dialog.Title>

                <div className="mt-4 ">
                  <div className="flex justify-center mt-2">
                    <input
                      type="text"
                      name="category-name"
                      id="category-name"
                      className="form-input-box h-9"
                      placeholder="Category Name"
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                    />
                  </div>

                  <ColorOptions selected={selected} setSelected={setSelected} />
                </div>

                {
                  /*Error Message*/
                  error ? (
                    <div>
                      <p className="text-red-500 text-md text-center mt-4">
                        {error}
                      </p>
                    </div>
                  ) : null
                }

                {/*Buttons*/}
                <div className="mt-6 flex justify-around">
                  <button
                    className="form-button w-28"
                    onClick={handleCloseButton}
                  >
                    Cancel
                  </button>
                  <button
                    className="form-button w-28"
                    onClick={() => {
                      addCategoryToList({
                        id: categoryList.length + 1,
                        name: categoryName,
                        color: selected,
                      })
                    }}
                  >
                    Create
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CreateCategoryModal

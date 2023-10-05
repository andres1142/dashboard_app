import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

interface ColorOptionsProps {
  selected: any
  setSelected: (value: any) => void
}

function ColorOptions({ selected, setSelected }: ColorOptionsProps) {
  const colorOptions = [
    "#9e9e03",
    "#014d01",
    "#029e9e",
    "#0000b5",
    "#c9c2cf",
    "#850000",
    "#a32d02",
    "#a16800",
  ]

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className={"mt-6"}
    >
      <div className="flex flex-wrap gap-3 items-center justify-center mx-10 mt-5">
        {colorOptions.map((item) => {
          return (
            <RadioGroup.Option
              as="div"
              key={item}
              value={item}
              className={({ active, checked }) =>
                `${
                  active
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-4 ring-offset-secondary_purple-200 opacity-80"
                    : ""
                }
            ${
              checked
                ? `ring-2 ring-white ring-opacity-60 ring-offset-4 ring-offset-secondary_purple-200 opacity-80 bg-[${item}]`
                : `bg-[${item}]`
            }
              relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none w-14 h-14`
              }
            />
          )
        })}
      </div>
    </RadioGroup>
  )
}

export default ColorOptions

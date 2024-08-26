import { useEffect } from 'react'

// Custom Checkbox Component
const CustomCheckbox = () => {
  useEffect(() => {
    const convertCheckboxElements = () => {
      // Find all elements that contain the checkbox placeholders
      const notionTextElements = document.querySelectorAll(
        '#notion-article div.notion-text'
      )

      notionTextElements.forEach(element => {
        if (element.innerText.startsWith('[ ]')) {
          const checkboxInput = document.createElement('input')
          checkboxInput.type = 'checkbox'

          // Style the checkbox using Tailwind classes
          checkboxInput.className = 'w-6 h-6 mr-2'

          // Event listener to toggle the checkbox state
          checkboxInput.addEventListener('change', () => {
            element.setAttribute('data-checked', checkboxInput.checked)
          })

          // Create a label or span to hold the checkbox label text
          const label = document.createElement('span')
          label.innerText = element.innerText.slice(3).trim()

          // Clear the original content
          element.innerHTML = ''

          // Ensure the checkbox and label are aligned
          element.className += ' flex items-center'

          // Append the new checkbox and label to the original element
          element.appendChild(checkboxInput)
          element.appendChild(label)
        } else if (element.innerText.startsWith('[x]')) {
          const checkboxInput = document.createElement('input')
          checkboxInput.type = 'checkbox'
          checkboxInput.checked = true

          checkboxInput.className = 'w-6 h-6 mr-2'

          checkboxInput.addEventListener('change', () => {
            element.setAttribute('data-checked', checkboxInput.checked)
          })

          const label = document.createElement('span')
          label.innerText = element.innerText.slice(3).trim()

          element.innerHTML = ''
          element.className += ' flex items-center'

          element.appendChild(checkboxInput)
          element.appendChild(label)
        }
      })
    }

    const observer = new MutationObserver(() => {
      convertCheckboxElements()
    })

    const targetNode = document.querySelector('#notion-article')
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true })
    }

    convertCheckboxElements()

    return () => observer.disconnect()
  }, [])

  return null
}

export default CustomCheckbox

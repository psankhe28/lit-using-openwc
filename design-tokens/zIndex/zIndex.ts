// Define z-index values for layering elements
export const zIndex = {
    description: 'These are the default z-index values used for layering elements',
    zIndex: {
      background: {
        value: 0,
        description: 'Z-index for background elements',
        type: 'layer',
      },
      default: {
        value: 1,
        description: 'Default z-index for most elements',
        type: 'layer',
      },
      dropdown: {
        value: 100,
        description: 'Z-index for dropdown menus',
        type: 'layer',
      },
      modal: {
        value: 1000,
        description: 'Z-index for modal dialogs',
        type: 'layer',
      },
      overlay: {
        value: 2000,
        description: 'Z-index for overlays (e.g., lightbox)',
        type: 'layer',
      },
      topmost: {
        value: 9999,
        description: 'Topmost z-index for elements that should always appear on top',
        type: 'layer',
      },
    },
  };
  
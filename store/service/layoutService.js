const getSocialOptionsAsync = async () => {
  let options = [];
  try {
    const response = await fetch('./data/options.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    options = await response.json()
  } catch (error) {
    console.error('ERROR:', error);
  }
  return options.social;
}

const getNavOptionsAsync = async () => {
  let options = [];
  try {
    const response = await fetch('./data/options.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    options = await response.json()
  } catch (error) {
    console.error('ERROR:', error);
  }
  return options.nav;
}

const getFooterOptionsAsync = async () => {
  let options = {};
  try {
    const response = await fetch('./data/options.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    options = await response.json()
  } catch (error) {
    console.error('ERROR:', error);
  }
  return options.footer;
}

const getLayoutOptionsAsync = async () => {
  let options = {};
  try {
    const response = await fetch('./data/options.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    options = await response.json()
  } catch (error) {
    console.error('ERROR:', error);
  }
  return options;
}

export { getSocialOptionsAsync, getNavOptionsAsync, getFooterOptionsAsync, getLayoutOptionsAsync }

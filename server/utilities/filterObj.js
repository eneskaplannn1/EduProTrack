module.exports = function (body, ...filterObj) {
  const newObj = {};
  Object.keys(body).forEach((el) => {
    if (filterObj.includes(el)) newObj[el] = body[el];
  });
  return newObj;
};

let responce = (res, status, data) => {
    if (status >= 200 && status <= 205) {
      res.status(status).json({
        status: "Success",
        data,
      });
    } else {
      res.status(status).json({
        status: "Failed",
        message: data,
      });
    }
  };
  
export { responce }

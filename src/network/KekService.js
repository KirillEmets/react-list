const fetchKekItems = (page, pageSize) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: pageSize }).map((_, index) => ({
          title: `Item ${pageSize * page + index}`,
          text: "Description",
        }))
      );
    }, 500);
  });
};

export { fetchKekItems };

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getEnvVars } from "../utils";

const { endPoint } = getEnvVars();

export const useBlogList = (
  page = 1,
  per_page = 15,
  order = "asc",
  orderby = "date"
) => {
  if (!page) {
    page = 1;
  }

  if (!per_page) {
    per_page = 15;
  }

  if (!order) {
    order = "asc";
  }

  if (!orderby) {
    orderby = "date";
  }

  const [blogList, setBlogList] = useState({
    data: [],
    isLoading: true,
    isError: false,
  });

  const getBlogList = useCallback(async () => {
    try {
      const res = await axios.get(
        `${endPoint}/posts?page=${page}&per_page=${per_page}&order=${order}&orderby=${orderby}`
      );

      setBlogList({
        data: res.data,
        isLoading: false,
        isError: false,
      });
    } catch (error) {
      setBlogList((state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));

      console.log("Error => useBlogList", error);
    }
  }, [page, per_page, order, orderby]);

  useEffect(() => {
    getBlogList();
    return () => {};
  }, [getBlogList]);

  return [blogList, getBlogList];
};

"use client";

import useCustomRouter from "@/lib/router";
import { apiPaths } from "@/lib/routes";
import useBackendService from "@/service/BackendServices";
import { useCallback, useEffect, useState } from "react";

export const useAdListController = () => {
  const router = useCustomRouter();
  const api = useBackendService();
  const [adList, setAdList] = useState<AdListProps[] | null>(null);

  const getList = useCallback(async () => {
    try {
      const response: { data: AdListProps[] } = await api.get(apiPaths.adList);
      setAdList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [api]);

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gotoAdDetails = (id: number) => () => {
    router.push(`/advertisement/${id}`);
  };

  return {
    state: { adList },
    action: { gotoAdDetails },
  };
};

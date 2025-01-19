import useCustomRouter from "@/lib/router";
import { apiPaths, routes } from "@/lib/routes";
import useBackendService from "@/service/BackendServices";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useAdDetailsController = (id: string) => {
  const router = useCustomRouter();
  const api = useBackendService();
  const [adDetails, setAdDetails] = useState<AdDetailsProps | null>(null);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    const getAdDetails = async () => {
      try {
        const response: { data: AdDetailsProps } = await api.get(
          apiPaths.adDetails(id)
        );
        setAdDetails(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Error fetching ad data.");
        router.push(routes.advertisementList);
      }
    };
    getAdDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDeleteMode = () => {
    setDeleteMode((prev) => !prev);
  };

  const handleAdDelete = (id: string) => async () => {
    try {
      await api.delete(apiPaths.deleteAd(id));
      toast.success("Ad deleted successfully.");
      router.push(routes.advertisementList);
    } catch (error) {
      console.error("Error deleting ad:", error);
      toast.error("Error deleting ad.");
    }
  };

  return {
    state: { adDetails, deleteMode },
    actions: { toggleDeleteMode, handleAdDelete },
  };
};

"use client";

import { onIntegrateDomain } from "@/actions/settings";
import { AddDomainSchema } from "@/schemas/settings.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadClient } from "@uploadcare/upload-client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const upload = new UploadClient({
  publicKey: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string,
});

/**
 * Custom hook for managing domain-related functionality.
 * Uses form validation, file upload, domain integration, and toast notifications.
 */
export const useDomain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: zodResolver(AddDomainSchema),
  });

  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [isDomain, setIsDomain] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsDomain(pathname.split("/").pop());
  }, [pathname]);

  /**
   * Handles the submission of domain data.
   * Sets loading state, uploads a file, integrates domain, resets form, displays toast messages, and refreshes the router.
   */
  const onAddDomain = handleSubmit(async (values: FieldValues) => {
    setLoading(true);
    const uploaded = await upload.uploadFile(values.images[0]);
    const domain = await onIntegrateDomain(values.domain, uploaded.uuid);
    if (domain) {
      reset();
      setLoading(false);
      if ("message" in domain) {
        if (domain.status === 200) {
          toast.success(`${domain.message}`);
        } else {
          toast.error(`${domain.message}`);
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
      router.refresh();
    }
  });

  return {
    register,
    loading,
    errors,
    onAddDomain,
    isDomain,
  };
};

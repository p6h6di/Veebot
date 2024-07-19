import React from "react";
import { useDomain } from "@/hooks/use-domain";
import { cn } from "@/lib/utils";
import DomainDrawer from "./DomainDrawer";
import { Plus } from "lucide-react";
import Loader from "@/components/Loader";
import FormGenerator from "@/app/(auth)/_components/FormGenerator";
import UploadButton from "./UploadButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface DomainMenuProps {
  min?: boolean;
  domains:
    | {
        id: string;
        name: string;
        icon: string;
      }[]
    | null
    | undefined;
}

const DomainMenu = ({ domains, min }: DomainMenuProps) => {
  const { errors, isDomain, loading, onAddDomain, register } = useDomain();
  return (
    <div className={cn("flex flex-col gap-3", min ? "mt-6" : "mt-3")}>
      <div className="flex w-full items-center justify-between">
        {!min && <p className="text-xs text-gray-500">DOMAINS</p>}
        <DomainDrawer
          title="Add your business domain"
          description="add in your domain address  to integrate your chatbot"
          onOpen={
            <div className="cursor-pointer rounded-full border-2 text-gray-500">
              <Plus />
            </div>
          }
        >
          <Loader loading={loading}>
            <form
              className="mt-3 flex w-6/12 flex-col gap-3"
              onSubmit={onAddDomain}
            >
              <FormGenerator
                inputType="input"
                register={register}
                label="Domain"
                name="domain"
                errors={errors}
                placeholder="mydomain.com"
                type="text"
              />

              <UploadButton
                register={register}
                label="Upload Icon"
                errors={errors}
              />

              <Button type="submit" className="w-full">
                Add Domain
              </Button>
            </form>
          </Loader>
        </DomainDrawer>
      </div>

      <div className="flex flex-col gap-1 font-medium text-zinc-700">
        {Array.isArray(domains) &&
          domains.map((domain) => (
            <Link
              href={`/settings/${domain.name.split(".")[0]}`}
              key={domain.id}
              className={cn(
                "flex gap-3 items-center hover:bg-white rounded-lg transition duration-100 ease-in-out cursor-pointer",
                !min ? "p-2" : "py-2",
                domain.name.split(".")[0] === isDomain && "bg-white"
              )}
            >
              <Image
                src={`https://ucarecdn.com/${domain.icon}`}
                alt="logo"
                width={20}
                height={20}
              />
              {!min && <p className="text-sm">{domain.name}</p>}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DomainMenu;

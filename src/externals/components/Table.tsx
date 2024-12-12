"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CSSProperties,
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Confirm from "./popups/Confirm";
import Search from "./Search";
import { api } from "../utils/frontend";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalCircleIcon,
  EyeIcon,
  FunnelIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

interface typeTableProps {
  className?: string;

  prototypeTable: Array<{
    title: string;
    keyData: string | ((dataRow: Record<string, any>, primaryKey?: any) => any);
    className?: string;
    style?: CSSProperties;
  }>;
  path?: string;
  data?: typeDataTable;
  type?: "carded-section" | "carded" | "striped";
  actions?: ("show" | "edit" | "delete" | undefined)[] | "*";
  objParams?: Record<string, any>;

  onDelete?: (idItem: any) => void;
  onSearch?: (value: string) => void;
  onChangeParams?: (objectParams: any) => ReactNode;

  noHeader?: boolean;
  noNumber?: boolean;
  noSearch?: boolean;
  noPerPage?: boolean;
  noPaginate?: boolean;

  leftElement?: ReactNode;
  rightElement?: ReactNode;
  customAction?: (dataRow: Record<string, any>, primaryKey?: any) => any;
}
function Table({
  className,

  prototypeTable,
  path,
  data,
  type,
  actions,
  objParams,

  onDelete,
  onSearch,
  onChangeParams,

  noHeader,
  noNumber,
  noSearch,
  noPerPage = true,
  noPaginate,

  leftElement,
  rightElement,
  customAction,
}: typeTableProps) {
  const pathName = usePathname();
  const [DataTables, setDataTables] = useState<typeDataTable>({});
  const [ShowConfirmDelete, setShowConfirmDelete] = useState(null);
  const [ObjectParams, setObjectParams] = useState<any>({});

  /**
   * Function Handler
   */
  function loadData() {
    if (path) {
      setDataTables((prev) => ({ ...prev, statusCode: 202 }));
      api({
        path,
        objParams: ObjectParams,
        staleTime: 60,
      }).then(async (res) => {
        if (res.status == 200) {
          const { dataTable } = (await res.json()).data;
          setDataTables({ ...dataTable, statusCode: 200 });
        }
      });
    }
  }

  function handleDelete() {
    const idDeleted = ShowConfirmDelete;
    if (onDelete) {
      onDelete(idDeleted);
    } else if (!data && path) {
      api({
        path: `${path}/${idDeleted}`,
        method: "DELETE",
      }).then(async (res) => {
        if (res.status == 200) {
          // setDataTables((prev: typeDataTable) => ({
          //     ...(prev ?? {}),
          //     dataRows: (prev.dataRows ?? [])
          //         .filter((dataRow) => (dataRow?.[prev.primaryKey ?? 'id'] != idDeleted))
          // }))
          (window as any).fetchDataCached = {};
          setShowConfirmDelete(null);
          loadData();
        }
      });
    } else {
      setShowConfirmDelete(null);
    }
  }

  function handleSearch(searchWord: string) {
    if (data) {
      setDataTables(() => ({
        ...data,
        dataRows: data.dataRows?.filter((dataRow) => {
          return prototypeTable?.filter(({ keyData }) =>
            (typeof keyData == "function" ? keyData(dataRow) : dataRow[keyData])
              .toLowerCase()
              .match(searchWord.toLowerCase()),
          ).length;
        }),
      }));
    }
    if (onSearch) onSearch(searchWord);
    setObjectParams((prev: typeDataTable) => ({
      ...prev,
      page: 1,
      search: searchWord,
    }));
  }

  /**
   * useEffect
   */
  useEffect(() => {
    if (data) setDataTables(data);
  }, [data]);

  useEffect(() => {
    if (!data) loadData();
  }, [path, ObjectParams]);

  useEffect(() => {
    if (objParams != ObjectParams) {
      setObjectParams((prev: typeDataTable) => ({
        ...prev,
        page: 1,
        ...(objParams ?? {}),
      }));
    }
  }, [objParams]);

  useEffect(() => {
    if (onChangeParams && objParams != ObjectParams) {
      onChangeParams(ObjectParams);
    }
  }, [ObjectParams]);

  /**
   * Rendered JSX
   */
  return (
    <>
      <div className="bg-white border-b">
        <div className="flex gap-4 flex-col-reverse md:flex-row py-4 px-card-body">
          <div className="flex gap-2 text-xs">{leftElement}</div>
          <div className="flex gap-2 md:ml-auto">
            {rightElement}
            {!noSearch && <Search onSubmit={handleSearch} />}
            {!noPerPage && (
              <PerPage
                ObjectParams={ObjectParams}
                setObjectParams={setObjectParams}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <div
          className={`overflow-auto ${className} ${type == "carded-section" && "section-table"}`}
        >
          <table
            className={`table table-${(type ?? "striped").replace("-section", "")}`}
          >
            {!noHeader && (
              <thead>
                <tr>
                  {!noNumber && <th style={{ width: "1px" }}>#</th>}
                  {prototypeTable?.map((column, indexColumn) => {
                    return (
                      <th
                        key={indexColumn}
                        className={column.className}
                        style={column.style}
                      >
                        {column.title}
                      </th>
                    );
                  })}
                  {(customAction || actions?.length) && <th />}
                </tr>
              </thead>
            )}
            <tbody>
              {!DataTables?.dataRows?.length ||
              DataTables?.statusCode == 202 ? (
                <tr className="empty-row">
                  <td
                    colSpan={(prototypeTable?.length ?? 0) + (noNumber ? 1 : 2)}
                    className="text-center text-gray-500"
                    style={{ padding: "4rem 0" }}
                  >
                    {DataTables?.statusCode == 202
                      ? "Loading..."
                      : "Data Kosong"}
                  </td>
                </tr>
              ) : (
                DataTables.dataRows?.map(
                  (dataRow: Record<string, any>, indexDataRow) => {
                    const primaryKey = dataRow?.[DataTables.primaryKey ?? "id"];
                    return (
                      <tr key={indexDataRow}>
                        {!noNumber && (
                          <td>
                            {(ObjectParams?.per_page ?? 10) *
                              ((ObjectParams?.page ?? 1) > 0
                                ? (ObjectParams?.page ?? 1) - 1
                                : 0) +
                              indexDataRow +
                              1}
                          </td>
                        )}

                        {/* data rows */}
                        {prototypeTable?.map((column, indexColumn) => {
                          const { keyData } = column;
                          return (
                            <td
                              key={indexColumn}
                              // style={{
                              //     whiteSpace: 'initial',
                              //     overflow: 'hidden',
                              //     display: '-webkit-box',
                              //     "-webkit-line-clamp": 2,
                              // }}
                            >
                              {typeof keyData == "function"
                                ? keyData(dataRow)
                                : dataRow[keyData]}
                            </td>
                          );
                        })}

                        {(customAction || actions?.length) && (
                          <td className="inline-flex items-center gap-3 text-base">
                            {customAction
                              ? (customAction(dataRow, primaryKey) as ReactNode)
                              : ""}
                            {(actions?.includes("show") ||
                              actions?.[0] == "*") && (
                              <Link
                                href={`${pathName}/${primaryKey}`}
                                className="btn-action border-blue-400 text-blue-400"
                              >
                                <EyeIcon className="h-4" />
                              </Link>
                            )}
                            {(actions?.includes("edit") ||
                              actions?.[0] == "*") && (
                              <Link
                                href={`${pathName}/data/${primaryKey}`}
                                className="btn-action border-yellow-500 text-yellow-500"
                              >
                                <PencilSquareIcon className="h-4" />
                              </Link>
                            )}
                            {(actions?.includes("delete") ||
                              actions?.[0] == "*") && (
                              <a
                                className="btn-action border-red-400 text-red-400"
                                onClick={() => setShowConfirmDelete(primaryKey)}
                              >
                                <TrashIcon className="h-4" />
                              </a>
                            )}
                          </td>
                        )}
                      </tr>
                    );
                  },
                )
              )}
            </tbody>
          </table>
        </div>
        <Confirm
          show={ShowConfirmDelete != null}
          toHide={() => setShowConfirmDelete(null)}
          onApproved={handleDelete}
        />
      </div>
      <div className="pt-4 pb-8 px-card-body">
        {!noPaginate && (
          <Paginate
            onChange={(page) => {
              setObjectParams((prev: typeDataTable) => ({ ...prev, page }));
            }}
            currentPage={ObjectParams?.page ?? 1}
            perPage={ObjectParams?.per_page ?? 10}
            lastPage={DataTables.paginate?.last_page ?? 1}
            totalItem={DataTables?.paginate?.total ?? 10}
            showedItem={DataTables.dataRows?.length ?? 1}
          />
        )}
      </div>
    </>
  );
}

function PerPage({
  ObjectParams,
  setObjectParams,
}: {
  ObjectParams: Record<string, any>;
  setObjectParams: Dispatch<SetStateAction<Record<string, any>>>;
}) {
  return (
    <div className="relative flex items-center">
      <FunnelIcon className="w-4 absolute left-4" />
      <select
        className="btn-flat h-[2.25rem] pl-10 border-none text-xxs bg-gray-100"
        style={{ WebkitAppearance: "none" }}
        value={ObjectParams?.per_page}
        onChange={(e) => {
          setObjectParams((prev) => ({
            ...prev,
            per_page: (e.target as any).value,
          }));
        }}
      >
        {[10, 25, 50, 100].map((count, indexCount) => (
          <option key={indexCount} className="pl-0" value={count}>
            {count} Entries
          </option>
        ))}
      </select>
    </div>
  );
}

function Paginate({
  onChange,
  currentPage,
  lastPage,
  perPage,
  totalItem,
  showedItem,
}: {
  onChange: (page: number) => any;
  currentPage: number;
  lastPage: number;
  perPage: number;
  totalItem: number;
  showedItem: number;
}) {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  function onSwitch(page: number) {
    if (currentPage != page) onChange(page);
  }

  return (
    <div className="flex items-baseline">
      <div className="">
        <div className="text-xs">
          Showing {perPage * (currentPage > 0 ? currentPage - 1 : 0)} to{" "}
          {showedItem} of {totalItem} entries
        </div>
      </div>
      <div className="ml-auto">
        <ul className="flex flex-row items-center gap-1">
          {prevPage >= 1 && (
            <PaginateItem
              className="px-4 py-2 gap-1 pl-2.5"
              onClick={() => onSwitch(prevPage)}
            >
              <ChevronLeftIcon />
              <span>Previous</span>
            </PaginateItem>
          )}
          {currentPage > 2 && (
            <PaginateItem
              className={`aspect-square`}
              onClick={() => onSwitch(1)}
            >
              1
            </PaginateItem>
          )}

          {prevPage - 1 > 1 && (
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center"
            >
              <EllipsisHorizontalCircleIcon />
              <span className="sr-only">More pages</span>
            </span>
          )}
          {prevPage > 1 && nextPage > lastPage && (
            <PaginateItem
              className={`aspect-square`}
              onClick={() => onSwitch(prevPage - 1)}
            >
              {prevPage - 1}
            </PaginateItem>
          )}

          {prevPage >= 1 && (
            <PaginateItem
              className={`aspect-square ${prevPage == currentPage ? "border" : ""}`}
              onClick={() => onSwitch(prevPage)}
            >
              {prevPage}
            </PaginateItem>
          )}
          <PaginateItem
            className={`aspect-square ${currentPage == currentPage ? "border" : ""}`}
          >
            {currentPage}
          </PaginateItem>
          {nextPage <= lastPage && (
            <PaginateItem
              className={`aspect-square ${nextPage == currentPage ? "border" : ""}`}
              onClick={() => onSwitch(nextPage)}
            >
              {nextPage}
            </PaginateItem>
          )}

          {nextPage < lastPage && prevPage < 1 && (
            <PaginateItem
              className={`aspect-square`}
              onClick={() => onSwitch(nextPage + 1)}
            >
              {nextPage + 1}
            </PaginateItem>
          )}
          {nextPage + 1 < lastPage && (
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center"
            >
              <EllipsisHorizontalCircleIcon />
              <span className="sr-only">More pages</span>
            </span>
          )}

          {nextPage < lastPage && (
            <PaginateItem
              className={`aspect-square ${lastPage == currentPage ? "border" : ""}`}
              onClick={() => onSwitch(lastPage)}
            >
              {lastPage}
            </PaginateItem>
          )}
          {nextPage <= lastPage && (
            <PaginateItem
              className="px-4 py-2 gap-1 pr-2.5"
              onClick={() => onSwitch(nextPage)}
            >
              <span>Next</span>
              <ChevronRightIcon />
            </PaginateItem>
          )}
        </ul>
      </div>
    </div>
  );
}

function PaginateItem({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors hover:bg-gray-100 h-8 cursor-pointer ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

// function PaginateOld({
//   page,
//   onChange,
//   lastPage = 1,
// }: {
//   page: number;
//   onChange: (page: number) => any;
//   lastPage?: number;
// }) {
//   const prevPage = page - 1;
//   const nextPage = page + 1;
//   return (
//     <div>
//       <div className="flex items-center h-[2.25rem] border border-gray-400 rounded-lg overflow-hidden">
//         <div
//           onClick={() => {
//             if (prevPage > 0) onChange(prevPage);
//           }}
//           className={`${prevPage > 0 ? "cursor-pointer hover:text-primary" : "text-gray-400"} flex items-center`}
//         >
//           <ChevronLeftIcon className="pt-[2px] pl-2" />
//         </div>
//         <div className="cursor-default flex items-center">
//           <div className="px-1 pt-[2px]">
//             {page}/{lastPage}
//           </div>
//         </div>
//         <div
//           onClick={() => {
//             if (nextPage <= lastPage) onChange(nextPage);
//           }}
//           className={`${nextPage <= lastPage ? "cursor-pointer hover:text-primary" : "text-gray-400"} flex items-center`}
//         >
//           <ChevronRightIcon className="pt-[2px] pr-2" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default Table;

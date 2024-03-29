import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { Icon } from "@iconify/react";

import "./_Table.scss";

export default function TablePaginations({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  return (
    <div className="table-container ">
      <div className="table__wrapper">
        <table border="0" rules="all" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
            <tr>
              {loading ? (
                <td colSpan="10000">Cargando...</td>
              ) : (
                <td colSpan="10000">
                  Muestra <strong>{page.length}</strong> de{" "}
                  <strong>{controlledPageCount * pageSize} </strong>
                  resultados
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table__pagination-mix">
        <div className="flex-responsive-pagination">
          <div className="flex-arrows-btns-pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <Icon
                icon="fluent:arrow-previous-24-filled"
                className="nav-link-icon f-l"
              />
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <Icon
                icon="eva:arrow-ios-back-outline"
                className="nav-link-icon f-xl"
              />
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <Icon
                icon="eva:arrow-ios-forward-outline"
                className="nav-link-icon f-xl"
              />
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <Icon
                icon="fluent:arrow-next-24-filled"
                className="nav-link-icon f-l"
              />
            </button>{" "}
          </div>
          <span>
            Página{" "}
            <strong>
              {pageIndex + 1} de {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
        <div className="flex-responsive-pagination">
          <span>
            Ir a la página:{" "}
            <input
              type="number"
              min="1"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              // style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

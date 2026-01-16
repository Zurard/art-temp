import { Paginator } from "primereact/paginator";
import type {PaginatorPageChangeEvent} from "primereact/paginator";

type PaginationProps = {
  totalRecords: number;
  page: number;
  rows: number;
  onChange: (page: number, rows: number) => void;
};

export default function Pagination({
  page,
  rows,
  totalRecords,
  onChange,
}: PaginationProps) {

  const handlePageChange = (event: PaginatorPageChangeEvent) => {
    onChange(event.page, event.rows);
  };

  return (
    <Paginator
      first={page * rows}
      rows={rows}
      totalRecords={totalRecords}
      rowsPerPageOptions={[5, 10, 20]}
      onPageChange={handlePageChange}
    />
  );
}


import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Pagination from "./pagination";
import { useState, useEffect } from "react";
import { fetchArtData } from "./api/artApi";

type ArtData = {
    id: number;
    title: string;
    place_of_origin: string;
    artist_display: string;
    inscriptions: string;
    date_start: string;
    date_end: string;
}

export default function App() {
    const [ArtData , setArtData] = useState<ArtData[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedArt, setSelectedArt] = useState<ArtData[]>([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(12);

    useEffect(() => {
    fetchArtData()
      .then((response) => {
        setArtData(response.data);
        setTotalRecords(response.data.length);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handlePageChange = (page: number, rows: number) => {
    setPage(page);
    setRowsPerPage(rows);
  };
  
  const paginatedData = ArtData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div style={{ padding: "2rem" }}>
      <DataTable 
      selection={selectedArt}
      value={paginatedData}
      loading={loading}
      rows={12}
      onSelectionChange={(e) => setSelectedArt(e.value as ArtData[])}
      tableStyle={{ minWidth: "30rem" }}>
        <Column selectionMode="multiple" header="Select" headerStyle={{ width:"5rem"}} />
        <Column field="id" header="ID" />
        <Column field="title" header="Title" />
        <Column field="place_of_origin" header="Place of Origin" />
        <Column field="artist_display" header="Artist" />
        <Column field="inscriptions" header="Inscriptions" />
        <Column field="date_start" header="Start Date" />
        <Column field="date_end" header="End Date" />
      </DataTable>

      <Pagination
        totalRecords={totalRecords}
        rows={rowsPerPage}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}

import React, { lazy, Suspense } from "react";

//IMPORT LAZY
const TableDesktop = lazy(() => import("./TableDesktop"));
const TableMobile = lazy(() => import("./TableMobile"));

function TablaPacientes() {
  return (
    <div>
      {navigator.userAgent.includes("Mobile") ? (
        <Suspense fallback={"Cargando..."}>
          <TableMobile />
        </Suspense>
      ) : (
        <Suspense fallback={"Cargando..."}>
          <TableDesktop />
        </Suspense>
      )}
    </div>
  );
}

export default TablaPacientes;

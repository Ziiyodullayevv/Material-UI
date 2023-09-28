import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <Box mt={5} className="container">
      <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Ism</TableCell>
              <TableCell>Familiya</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child  th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Rutledge",
    last_name: "Grout",
    email: "rgrout0@studiopress.com",
    gender: "Male",
    ip_address: "174.142.246.4",
  },
  {
    id: 2,
    first_name: "Benoit",
    last_name: "Garmans",
    email: "bgarmans1@newsvine.com",
    gender: "Male",
    ip_address: "49.250.8.160",
  },
  {
    id: 3,
    first_name: "Sherill",
    last_name: "Titherington",
    email: "stitherington2@fastcompany.com",
    gender: "Female",
    ip_address: "228.214.205.123",
  },
  {
    id: 4,
    first_name: "Nicholle",
    last_name: "Tarrant",
    email: "ntarrant3@barnesandnoble.com",
    gender: "Female",
    ip_address: "224.175.252.154",
  },
  {
    id: 5,
    first_name: "Curtis",
    last_name: "Itschakov",
    email: "citschakov4@addthis.com",
    gender: "Bigender",
    ip_address: "68.192.230.245",
  },
  {
    id: 6,
    first_name: "Robina",
    last_name: "Chatt",
    email: "rchatt5@npr.org",
    gender: "Female",
    ip_address: "142.151.161.254",
  },
  {
    id: 7,
    first_name: "Gloriana",
    last_name: "Sicely",
    email: "gsicely6@nature.com",
    gender: "Female",
    ip_address: "102.110.45.157",
  },
  {
    id: 8,
    first_name: "Orion",
    last_name: "Kondratowicz",
    email: "okondratowicz7@mtv.com",
    gender: "Male",
    ip_address: "115.161.78.255",
  },
  {
    id: 9,
    first_name: "Lucina",
    last_name: "Aitken",
    email: "laitken8@ycombinator.com",
    gender: "Female",
    ip_address: "92.251.176.227",
  },
  {
    id: 10,
    first_name: "Lambert",
    last_name: "Probat",
    email: "lprobat9@mozilla.com",
    gender: "Male",
    ip_address: "187.85.192.233",
  },
  {
    id: 11,
    first_name: "Fianna",
    last_name: "McFall",
    email: "fmcfalla@independent.co.uk",
    gender: "Female",
    ip_address: "227.255.79.239",
  },
  {
    id: 12,
    first_name: "Alleyn",
    last_name: "Cancellor",
    email: "acancellorb@nps.gov",
    gender: "Male",
    ip_address: "19.34.93.214",
  },
  {
    id: 13,
    first_name: "Valerie",
    last_name: "Cawston",
    email: "vcawstonc@google.es",
    gender: "Female",
    ip_address: "190.1.235.113",
  },
  {
    id: 14,
    first_name: "Cob",
    last_name: "Giffaut",
    email: "cgiffautd@people.com.cn",
    gender: "Male",
    ip_address: "135.198.110.206",
  },
  {
    id: 15,
    first_name: "Padriac",
    last_name: "Polhill",
    email: "ppolhille@virginia.edu",
    gender: "Male",
    ip_address: "27.162.251.199",
  },
];

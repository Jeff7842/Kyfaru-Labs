import { createRoot } from 'react-dom/client'

const myelement =(
<table>
    <tr>
      <th>
        Kyfaru Labs
      </th>
      <th>
        Name
      </th>
      <th>
        John
      </th>
      <th>
        Elsa
      </th>
    </tr>
  </table>
)
createRoot(document.getElementById('kyfaru')).render(
  myelement
)
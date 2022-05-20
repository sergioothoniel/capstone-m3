import styled from "styled-components"

export const TableContainer = styled.div`

.table{
    display: flex;
    justify-content: center;
    overflow-x: scroll;
 
    margin: 0 auto;
    min-width: 300px;
    max-width: 600px;
    width: 90%;
    padding-bottom: 15px;
    .table-column + .table-column{
        margin-left: 15px;
    }
}

.table::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

.table::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

.table::-webkit-scrollbar-thumb {
  background: #3d5a80;
  border: 0px none #ffffff;
  border-radius: 50px;
}

.table::-webkit-scrollbar-thumb:hover {
  background: #3d5a80;
}

.table::-webkit-scrollbar-thumb:active {
  background: #090c7c;
}

.table::-webkit-scrollbar-track {
  background: #3d5a80;
  border: 0px none #ffffff;
  border-radius: 50px;
}

.table::-webkit-scrollbar-track:hover {
  background: #3d5a80;
}

.table::-webkit-scrollbar-track:active {
  background: #3d5a80;
}

.table::-webkit-scrollbar-corner {
  background: transparent;
}

.table-column{
    display: flex;
    flex-direction: column;
    
}

span{
    padding: 5px; 
    font-weight: 300;
    text-align: center;
}

.currentDay{
    font-weight: 600;
    text-align: center;
}

button{
    border: 1px solid #C0C0C0;
    cursor: pointer;
    background-color: #3CB371;
    padding: 2px;
    border-radius: 5px;
}

#confirmed{
    background-color: #C0C0C0;
}

.btn-confirm{
    display: ${props => props.btnConfirm ? 'block' : 'none'};
}

.selected{
    background-color: white;
}
`
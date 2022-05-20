import styled from "styled-components"

export const TableContainer = styled.div`

.table{
    display: flex;
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

.table-column{
    display: flex;
    flex-direction: column;
    
}

span{
    padding: 5px; 
    font-weight: 300;
}

.currentDay{
    font-weight: 600;
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
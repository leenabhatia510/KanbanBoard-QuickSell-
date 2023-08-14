import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components'; // Import styled-components
import Card from './card';

// Global Styles
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
  }
`;

// Styled components
const KanbanBoardContainer = styled.div`
  padding: 20px;
`;

const ControlButton = styled.button`
  margin-right: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Column = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  padding: 16px;
  margin: 16px 0;
`;

const ColumnTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const KanbanBoard = () => {
  const [data, setData] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://apimocha.com/quicksell/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Save group and sort options to local storage
    localStorage.setItem('groupOption', groupBy);
    localStorage.setItem('sortOption', sortBy);
  }, [groupBy, sortBy]);

  // Group and sort data based on user selections
  const groupedAndSortedData = () => {
    let groupedData = [];

    if (groupBy === 'status') {
      groupedData = groupAndSortByStatus(data);
    } else if (groupBy === 'user') {
      groupedData = groupAndSortByUser(data);
    } else if (groupBy === 'priority') {
      groupedData = groupAndSortByPriority(data);
    }

    return groupedData;
  };

  const groupAndSortByStatus = (items) => {
    // Implement grouping and sorting by status
    // Return the grouped and sorted data
  };

  const groupAndSortByUser = (items) => {
    // Implement grouping and sorting by user
    // Return the grouped and sorted data
  };

  const groupAndSortByPriority = (items) => {
    // Implement grouping and sorting by priority
    // Return the grouped and sorted data
  };

  const handleGroupByChange = (option) => {
    setGroupBy(option);
  };

  const handleSortByChange = (option) => {
    setSortBy(option);
  };

  return (
    <KanbanBoardContainer>
      <GlobalStyles />
      <div className="controls">
        <ControlButton onClick={() => handleGroupByChange('status')}>Group by Status</ControlButton>
        <ControlButton onClick={() => handleGroupByChange('user')}>Group by User</ControlButton>
        <ControlButton onClick={() => handleGroupByChange('priority')}>Group by Priority</ControlButton>
        <ControlButton onClick={() => handleSortByChange('priority')}>Sort by Priority</ControlButton>
        <ControlButton onClick={() => handleSortByChange('title')}>Sort by Title</ControlButton>
      </div>

      <div className="kanban-columns">
        {groupedAndSortedData().map((group, index) => (
          <Column key={index}>
            <ColumnTitle>{group.name}</ColumnTitle>
            {group.items.map(item => (
              <Card key={item.id} data={item} />
            ))}
          </Column>
        ))}
      </div>
    </KanbanBoardContainer>
  );
};

export default KanbanBoard;

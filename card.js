
import React from 'react';
import styled from 'styled-components'; // Import styled-components

// Styled components
const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  padding: 16px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;
`;

const CardDetails = styled.div`
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`;

const Card = ({ data, onClick }) => {
  const { title, description, status, user, priority } = data;

  return (
    <CardContainer onClick={onClick}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardDetails>
        <div>Status: {status}</div>
        <div>User: {user}</div>
        <div>Priority: {priority}</div>
      </CardDetails>
    </CardContainer>
  );
};

export default Card;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';

import api from '../../services/api';
 
import { Container, Image, Name, NoSeries, PageHandler } from './style';

export default function Series({heroId}) {

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 12;

  useEffect(() => {
    async function loadSeries() {
      setLoading(true);
      const response = await api.get(
        `v1/public/characters/${heroId}/series`,
        {
          params: {
            limit,
            offset,
          },
        }
      );

      const { total, count, results } = response.data.data;

      setLoading(false);
      setSeries(results);
      if (pageCount === 0) {
        setPageCount(Math.ceil(total / count));
      }
    }
    loadSeries();
  }, [heroId, offset, pageCount]);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    setOffset(limit * currentPage);
  }

  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
    setOffset(limit * currentPage);
  }

  function renderLoading() {
    return (
      <Loader
        data-testid="loader"
        type="ThreeDots"
        color="#fff"
        width={32}
        height={32}
      />
    );
  }

  return (
    <Container data-testid="container">
        <div className="header" data-testid="header">
          <h2>Séries ou Quadrinhos:</h2>
        </div>
        {loading ? (
        renderLoading()
      ) : (
        <div className="series" data-testid="series">
          {series.map(serie => {
            const url = serie.urls[0].url
            const { id, title, thumbnail } = serie;
            const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;
            return (
              <a href={url} target="_blank">
                <div className="serie" data-testid="serie" key={id}>
                  <Image src={imageSrc} alt={title} />
                  <Name>{title}</Name>
                </div>
              </a>
            );
          })}
          <NoSeries data-testid="noserie" hide={series.length > 0}>
            <p>Esse heroi nāo aparece em uma série ou quadrinho.</p>
          </NoSeries>
        </div>
      )}

      <PageHandler hide={series.length > 0}>
        <button
          type="button"
          disabled={currentPage === 1 || loading}
          onClick={handlePreviousPage}
        >
          <MdChevronLeft size={24} color="#fff" />
        </button>
        <span>{`${currentPage} de ${pageCount}`}</span>
        <button
          type="button"
          disabled={currentPage === pageCount || loading}
          onClick={handleNextPage}
        >
          <MdChevronRight size={24} color="#fff" />
        </button>
      </PageHandler>
      </Container>
  );
};
Series.propTypes = {
  heroId: PropTypes.number.isRequired,
};


import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'



class FilterableProductTable extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false,
        sortByPrice: false
      };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
      this.handleSortByPrice = this.handleSortByPrice.bind(this);
    }

    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }

    handleSortByPrice(sortByPrice) {
      this.setState({
        sortByPrice: sortByPrice
      })
    }

  
    render() {
      return (
        <div>
          <SearchBar filterText={this.state.filterText} 
                        inStockOnly={this.state.inStockOnly}
                            onFilterTextChange={this.handleFilterTextChange}
                                onInStockChange={this.handleInStockChange}
                                    onSortByPriceChange={this.handleSortByPrice}/>
          <ProductTable products={this.props.products} 
                          filterText={this.state.filterText}
                            inStockOnly={this.state.inStockOnly}
                              sortByPrice={this.state.sortByPrice}/>
        </div>
      );
    }
  }

  export default FilterableProductTable;
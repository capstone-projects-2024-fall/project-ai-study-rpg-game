import React, { useState, useEffect } from 'react';
import './index.css';
import styles from './Store.module.css';
import items from './data/itemData.js';

export default function Store(){
    const [gold, setGold] = useState(0); // Initialize with 0
    const [selectedItems, setSelectedItems] = useState([]);
    
        // Fetch gold from localStorage when component mounts
    useEffect(() => {
      const storedGold = localStorage.getItem('gold');
      if (storedGold) {
          setGold(parseInt(storedGold, 10)); // Parse and set gold
      }
  }, []);

  const email = localStorage.getItem('email'); // Retrieve email from localStorage

  const firstSet = items.slice(0, 4);
  const secondSet = items.slice(4, 8);
  const thirdSet = items.slice(8);

  // Handle item selection
  const handleSelection = (itemId) => {
      setSelectedItems((prev) =>
          prev.includes(itemId)
              ? prev.filter((id) => id !== itemId) // Deselect if already selected
              : [...prev, itemId] // Add to selection
      );
  };

  // Handle Buying
  const handleBuy = async () => {
      console.log('handleBuy function triggered');
      if (selectedItems.length === 0) {
          alert('No items selected!');
          return;
      }

      if (!email) {
          alert('Email not found in localStorage');
          return;
      }

      // Get item details
      const selectedItemsDetails = selectedItems.map((itemId) => {
          const item = items.find((item) => item.id === itemId);
          return {
              id: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
          };
      });

      const totalPrice = selectedItemsDetails.reduce((sum, item) => sum + item.price, 0);

      // Check if the user has enough gold
      if (gold < totalPrice) {
          alert('Not enough gold to buy the selected items!');
          return;
      }

      try {
          // Send selected items to the buyItems endpoint
          const buyResponse = await fetch('http://127.0.0.1:5000/api/buyItems', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, items: selectedItemsDetails }),
          });

          if (!buyResponse.ok) {
              const error = await buyResponse.json();
              throw new Error(error.message || 'Failed to buy items');
          }

          console.log('Items successfully added to the database.');

          // Update gold after purchase
          const goldResponse = await fetch('http://127.0.0.1:5000/api/updatePlayerGold', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, amount: -totalPrice }),
          });

          if (!goldResponse.ok) {
              const error = await goldResponse.json();
              throw new Error(error.message || 'Failed to update gold');
          }

          console.log('Gold successfully updated.');

          // Update local state and notify the user
          const newGold = gold - totalPrice;
          setGold(newGold);
          localStorage.setItem('gold', newGold);
          alert(`Purchase successful! You bought: ${selectedItems.map((id) => items.find((i) => i.id === id)?.name).join(', ')}`);
          setSelectedItems([]);
      } catch (error) {
          console.error('Error during purchase:', error);
          alert('An error occurred while processing your purchase. Please try again.');
      }
    };

    return( 
        <div>
            <h1 className={styles.title}>
                <strong>Store</strong>
            </h1>

            <div className={styles.goldBox}>
                <span>Gold: {gold}</span>
            </div>

            <div className={styles.imageBoxGroupsContainer}>
                <div className={styles.imageBoxGroup}>
                    <div className={styles.storeContainer}>
                        <div className={styles.itemSetsWrapper}>
                            {firstSet.map((item) => (
                                <div key={item.id} className={styles.imageBoxContainer}>
                                    <input
                                        type="checkbox"
                                        id={item.id}
                                        className={styles.imageCheckbox}
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleSelection(item.id)}
                                    />
                                    <label htmlFor={item.id} className={styles.imageLabel}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className={styles.image}
                                        />
                                        <span>{item.name} : {item.price} Gold</span>
                                        <div className={styles.tooltip}>
                                            <p>{item.description}</p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                            {secondSet.map((item) => (
                                <div key={item.id} className={styles.imageBoxContainer}>
                                    <input
                                        type="checkbox"
                                        id={item.id}
                                        className={styles.imageCheckbox}
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleSelection(item.id)}
                                    />
                                    <label htmlFor={item.id} className={styles.imageLabel}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className={styles.image}
                                        />
                                        <span>{item.name} : {item.price} Gold</span>
                                        <div className={styles.tooltip2}>
                                            <p>{item.description}</p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                            <div className={styles.thirdSetContainer}>
                                {thirdSet.map((item) => (
                                    <div key={item.id} className={styles.imageBoxContainer}>
                                        <input
                                            type="checkbox"
                                            id={item.id}
                                            className={styles.imageCheckbox}
                                            checked={selectedItems.includes(item.id)}
                                            onChange={() => handleSelection(item.id)}
                                        />
                                        <label htmlFor={item.id} className={styles.imageLabel}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className={styles.image}
                                            />
                                            <span>{item.name} : {item.price} Gold</span>
                                            <div className={styles.tooltip2}>
                                                <p>{item.description}</p>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className={styles.buyButton} onClick={handleBuy}>
                Buy Selected Items
            </button>
        </div>
    );
}
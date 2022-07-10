package com.familybucket.backend;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="items")
public class Item {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Getter @Setter private Integer id;

    @Column(name="name")
    @Getter @Setter private String name;

    @Column(name="thumbnail_link")
    @Getter @Setter private String thumbnail_link;

    @Column(name="quantity")
    @Getter @Setter private Integer quantity;

    @Column(name="price")
    @Getter @Setter private double price;

    @Column(name="rating")
    @Getter @Setter private Integer rating;

    @Column(name="description")
    @Getter @Setter private String description;
}
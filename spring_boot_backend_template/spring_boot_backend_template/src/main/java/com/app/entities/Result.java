package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="result")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Result extends BaseEntity {
@Enumerated(EnumType.STRING)
private examType examType;
@Column(length=10,nullable = false,unique=true)
private String result;

@OneToOne
@JoinColumn(name="answer_id", nullable = false)
private UserAnswer ans;
}

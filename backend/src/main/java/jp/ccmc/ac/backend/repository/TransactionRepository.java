package jp.ccmc.ac.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.ccmc.ac.backend.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction,Long>{

}

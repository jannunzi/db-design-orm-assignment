package com.example.springtemplate.member;

import com.example.springtemplate.member.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository
        extends CrudRepository<Member, Integer> {
}

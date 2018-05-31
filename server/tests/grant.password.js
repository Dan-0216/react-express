import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
    done();
});

describe('## Test api', () => {
    describe('# POST /api/test', () => {
        it('Test api', (done) => {
            request(app)
                .get('/api/test')
                .expect(httpStatus.OK)
                .then((res) => {
                    console.log(res.text);
                    done();
                })
                .catch(done);
        });
    });
});
